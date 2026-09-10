import { execFileSync, spawnSync } from "node:child_process"
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { runAllRoutingChecks } from "@tscircuit/checks"
import { convertCircuitJsonToAssemblySvg, convertCircuitJsonToPcbSvg, convertCircuitJsonToSchematicSvg } from "circuit-to-svg"
import { bom, csv, hashFile, inventory, readJson, root, sha256, sorted, sourceFiles } from "./fabrication-lib.mjs"

const target = join(root, "fabrication")
mkdirSync(join(root, "dist"), { recursive: true })
const work = mkdtempSync(join(root, "dist/fabrication-stage-"))
const cli = join(root, "node_modules/tscircuit/cli.mjs")
const env = { ...process.env, TSCI_SKIP_CLI_UPDATE: "true", TSCI_TELEMETRY_DISABLED: "true", FORCE_COLOR: "0" }
const checks = []
const write = (path, content) => {
  mkdirSync(dirname(join(work, path)), { recursive: true })
  writeFileSync(join(work, path), content)
}
const writeJson = (path, data) => write(path, JSON.stringify(data, null, 2) + "\n")
function run(name, args, { required = false, executable = process.execPath } = {}) {
  console.log(`${name}…`)
  const result = spawnSync(executable, args, { cwd: root, env, encoding: "utf8", maxBuffer: 32 * 1024 * 1024, timeout: 600000 })
  const log = `${result.stdout ?? ""}${result.stderr ?? ""}${result.error ? `\n${result.error.message}` : ""}`
  const record = { name, command: [executable, ...args].map((p) => p.startsWith(root) ? relative(root, p) : p), exit_code: result.status, status: result.status === 0 ? "passed" : "failed", log: `checks/${name}.log` }
  checks.push(record)
  write(record.log, log)
  if (required && record.status !== "passed") throw new Error(`${name} failed; see ${join(work, record.log)}`)
  return record
}

const initialSources = Object.fromEntries(sourceFiles().map((p) => [p, hashFile(join(root, p))]))
run("typecheck", [join(root, "node_modules/typescript/bin/tsc"), "--noEmit"], { required: true })
run("netlist", [cli, "check", "netlist"], { required: true })
const schematic = run("schematic-placement", [cli, "check", "schematic-placement"])
if (/<(?:TraceCanBeSimplifiedByMovingComponent|TwoPinComponentShouldBeVertical|\w*Overlap\w*)\b/.test(readFileSync(join(work, schematic.log), "utf8"))) {
  schematic.status = "review-required"
}
run("placement", [cli, "check", "placement"])
run("build", [cli, "build", "--disable-parts-engine", "index.circuit.tsx"], { required: true })
const circuitPath = join(work, "circuit.json")
copyFileSync(join(root, "dist/index/circuit.json"), circuitPath)
const circuit = readJson(circuitPath)
const { board, parts, purchased, byType } = inventory(circuit)
const u2 = parts.find((p) => p.name === "U2")
const profile = readJson(join(root, "firmware/expected-pdos.json"))
if (u2?.mpn !== profile.controller || u2?.lcsc !== profile.lcsc_part) throw new Error("Firmware expectation and U2 ordering identity differ")

const routing = await runAllRoutingChecks(circuit)
const sourceErrors = circuit.filter((e) => e.type.endsWith("_error"))
writeJson("checks/routing.json", routing)
checks.push({ name: "routing", status: routing.some((e) => e.type.endsWith("_error")) ? "failed" : "passed", log: "checks/routing.json" })
const shorts = run("shorts", [cli, "check", "shorts", circuitPath])
const canExportGerbers = shorts.status === "passed" && !sourceErrors.length && !routing.some((e) => e.type.endsWith("_error")) && byType("pcb_trace").length > 0

write("BOM.csv", bom(purchased))
const smt = purchased.filter((p) => p.method === "SMT")
const manual = purchased.filter((p) => p.method !== "SMT")
write("BOM-SMT.csv", bom(smt))
const placementHeader = ["Designator", "Mid X", "Mid Y", "Layer", "Rotation"]
const placement = (p) => [p.name, p.pcb.center.x.toFixed(6), p.pcb.center.y.toFixed(6), p.pcb.layer, p.pcb.rotation]
write("CPL.csv", csv(placementHeader, smt.map(placement)))
write("manual-assembly.csv", csv([...placementHeader, "Manufacturer Part Number", "LCSC Part #", "Assembly"], manual.map((p) => [...placement(p), p.mpn, p.lcsc, p.method])))
write("placement-review.csv", csv([...placementHeader, "Assembly", "Rotation Review"], purchased.map((p) => [...placement(p), p.method, "supplier-centroid-and-pin1-review-pending"])))

const pinRows = []
for (const part of parts) {
  for (const port of byType("source_port").filter((p) => p.source_component_id === part.source.source_component_id)) {
    const nets = byType("source_net").filter((n) => n.subcircuit_connectivity_map_key === port.subcircuit_connectivity_map_key && port.subcircuit_connectivity_map_key).map((n) => n.name)
    const pads = byType("pcb_port").filter((p) => p.source_port_id === port.source_port_id)
    if (!pads.length) throw new Error(`No physical pad for ${part.name}.${port.pin_number}`)
    for (const pad of pads) pinRows.push([part.name, port.pin_number, port.name, (port.port_hints ?? []).join(";"), port.do_not_connect ? "NC" : nets.join(";"), port.do_not_connect ? "intentional-no-connect" : nets.length ? "connected" : "unresolved", pad.x.toFixed(6), pad.y.toFixed(6), pad.layers.join(";")])
  }
}
write("PINMAP.csv", csv(["Designator", "Pin", "Name", "Aliases", "Net", "Status", "Pad X", "Pad Y", "Layers"], pinRows))
if (pinRows.some((row) => row[5] === "unresolved")) throw new Error("Unresolved pin nets in generated pin map")

write("pcb.svg", convertCircuitJsonToPcbSvg(circuit, { width: 1800, height: 1000, includeVersion: false }))
write("assembly.svg", convertCircuitJsonToAssemblySvg(circuit, { width: 1800, height: 1000, includeVersion: false }))
for (const sheet of byType("schematic_sheet")) {
  if (!/^[a-z0-9_-]+$/i.test(sheet.name)) throw new Error("Unsupported schematic sheet filename")
  write(`schematic-${sheet.name}.svg`, convertCircuitJsonToSchematicSvg(circuit, { schematicSheetId: sheet.schematic_sheet_id, width: 2200, height: 1400, includeVersion: false }))
}
run("netlist-export", [cli, "export", circuitPath, "-f", "readable-netlist", "-o", join(work, "netlist.txt")], { required: true })

if (canExportGerbers) {
  // Export with the pinned CLI, then repack copper/drill files only; BOM/CPL
  // below are explicitly filtered for this board's actual assembly processes.
  const rawZip = join(work, "cli-gerbers.zip")
  run("gerber-export", [cli, "export", circuitPath, "-f", "gerbers", "-o", rawZip], { required: true })
  const entries = execFileSync("unzip", ["-Z1", rawZip], { encoding: "utf8" }).trim().split("\n")
  const cam = entries.filter((p) => /^[A-Za-z0-9_-]+\.(gbr|drl)$/.test(p))
  for (const name of ["F_Cu.gbr", "B_Cu.gbr", "Edge_Cuts.gbr", "F_Mask.gbr", "B_Mask.gbr"]) {
    if (!cam.includes(name)) throw new Error(`Gerber export missing ${name}`)
  }
  if (!cam.some((p) => p.endsWith(".drl"))) throw new Error("Gerber export lacks drilling")
  for (const name of cam) write(`gerbers/${name}`, execFileSync("unzip", ["-p", rawZip, name], { maxBuffer: 32 * 1024 * 1024 }))
  execFileSync("zip", ["-q", "-X", join(work, "Gerbers.zip"), ...sorted(cam)], { cwd: join(work, "gerbers") })
} else {
  console.log("Gerbers withheld: routed-artifact errors or copper-shorts gate failed.")
}

const minimum = (values) => {
  const finite = values.filter(Number.isFinite)
  return finite.length ? Math.min(...finite) : null
}
const traceWidths = byType("pcb_trace").flatMap((t) => t.route.filter((p) => p.route_type === "wire").map((p) => p.width))
writeJson("geometry.json", {
  board: { width_mm: board.width, height_mm: board.height, thickness_mm: board.thickness, layers: board.num_layers, material: board.material },
  coordinates: { unit: "mm", origin: "board centre", x_axis: "right", y_axis: "up", rotation: "counterclockwise degrees", supplier_rotation_calibrated: false },
  counts: { purchased_parts: purchased.length, smt_placements: smt.length, manual_placements: manual.length, bare_test_pads: parts.filter((p) => p.bare).length, traces: byType("pcb_trace").length, vias: byType("pcb_via").length, plated_holes: byType("pcb_plated_hole").length, nonplated_holes: byType("pcb_hole").length, pinmap_rows: pinRows.length },
  measured_minimum_mm: { trace_width: minimum(traceWidths), via_drill: minimum(byType("pcb_via").map((v) => v.hole_diameter)), via_pad: minimum(byType("pcb_via").map((v) => v.outer_diameter)) },
  scope: "Geometry inventory, not a clearance or supplier DFM certification",
})

const openReviews = [
  "Supplier rotation and centroid calibration for all fitted parts",
  "CAM, stencil, U2 via-in-pad, J2 plated-slot and assembly-process review",
  "Physical tests and release gates in LAB_VALIDATION_PLAN.md and DESIGN_RISK_REGISTER.md",
]
const validation = {
  schema_version: 1, generated_at_utc: new Date().toISOString(), circuit_sha256: hashFile(circuitPath),
  status: "engineering-review", released_for_manufacturing: false, gerbers_generated: canExportGerbers,
  checks, source_errors: sourceErrors,
  source_warning_counts: Object.fromEntries(sorted([...new Set(circuit.filter((e) => e.type.endsWith("_warning")).map((e) => e.type))]).map((t) => [t, byType(t).length])),
  open_reviews: openReviews, hardware_test_evidence: "not-supplied",
}
writeJson("validation.json", validation)
for (const [path, hash] of Object.entries(initialSources)) {
  if (hashFile(join(root, path)) !== hash) throw new Error(`Source changed during export: ${path}; rerun`)
}

// Promote only files generated by this script. An obsolete Gerber set is kept
// recoverably in dist, never alongside a newer failed validation manifest.
if (existsSync(join(target, "manifest.json"))) {
  const previous = readJson(join(target, "manifest.json"))
  const obsolete = Object.keys(previous.files).filter((p) => !existsSync(join(work, p)) && !p.endsWith(".md"))
  if (obsolete.length) {
    const archive = join(root, "dist/fabrication-obsolete", new Date().toISOString().replaceAll(":", "-"))
    for (const path of obsolete) {
      if (path.includes("..") || path.startsWith("/")) throw new Error("Invalid old manifest path")
      const old = join(target, path)
      if (!existsSync(old)) continue
      mkdirSync(dirname(join(archive, path)), { recursive: true })
      renameSync(old, join(archive, path))
    }
    console.log(`Previous generated files retained at ${archive}`)
  }
}
function stageFiles(dir = work) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? stageFiles(join(dir, e.name)) : [join(dir, e.name)])
}
const files = stageFiles().filter((p) => !p.endsWith("/cli-gerbers.zip"))
for (const path of files) {
  const out = join(target, relative(work, path))
  mkdirSync(dirname(out), { recursive: true })
  copyFileSync(path, out)
}
copyFileSync(join(target, "BOM.csv"), join(root, "BOM.csv"))
const artifactPaths = sorted([...files.map((p) => relative(work, p)), ...readdirSync(target).filter((p) => p.endsWith(".md"))])
const manifest = {
  schema_version: 1, generated_at_utc: validation.generated_at_utc,
  status: "engineering-review", released_for_manufacturing: false,
  circuit_sha256: hashFile(circuitPath),
  source_files: initialSources,
  tools: Object.fromEntries(["tscircuit", "@tscircuit/cli", "@tscircuit/checks", "circuit-to-svg"].map((p) => [p, readJson(join(root, "node_modules", p, "package.json")).version])),
  runtime: { bun: Bun.version, platform: process.platform },
  counts: readJson(join(target, "geometry.json")).counts,
  files: Object.fromEntries(artifactPaths.map((p) => [p, hashFile(join(target, p))])),
  root_bom_sha256: sha256(readFileSync(join(root, "BOM.csv"))),
}
writeFileSync(join(target, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
console.log(`Exported ${artifactPaths.length} review files: ${purchased.length} parts, ${smt.length} SMT placements, ${manual.length} manual/mixed placements.`)
console.log(`Gerbers: ${canExportGerbers ? "generated; engineering review" : "withheld"}. Run bun run check:fabrication to verify integrity.`)
if (!canExportGerbers) process.exitCode = 1
