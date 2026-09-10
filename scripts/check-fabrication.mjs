import assert from "node:assert/strict"
import { execFileSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { bom, hashFile, inventory, parseCsv, readJson, root, sha256, sorted, sourceFiles } from "./fabrication-lib.mjs"

const dir = join(root, "fabrication")
const manifest = readJson(join(dir, "manifest.json"))
assert.equal(manifest.schema_version, 1)
assert.equal(manifest.released_for_manufacturing, false)
assert.deepEqual(sorted(Object.keys(manifest.source_files)), sourceFiles(), "Source inventory changed; rerun export:fabrication")
for (const [path, hash] of Object.entries(manifest.source_files)) {
  assert.equal(hashFile(join(root, path)), hash, `Stale source: ${path}; rerun export:fabrication`)
}
for (const [path, hash] of Object.entries(manifest.files)) {
  assert(!path.includes("..") && !path.startsWith("/"), "Invalid artifact path")
  assert.equal(hashFile(join(dir, path)), hash, `Artifact changed: ${path}`)
}
assert.equal(hashFile(join(root, "BOM.csv")), manifest.root_bom_sha256)
assert.equal(hashFile(join(dir, "BOM.csv")), manifest.root_bom_sha256)
assert.equal(hashFile(join(dir, "circuit.json")), manifest.circuit_sha256)
const circuit = readJson(join(dir, "circuit.json"))
const { board, purchased, parts } = inventory(circuit)
assert.equal(board.width, 110)
assert.equal(board.height, 60)
assert.equal(board.num_layers, 2)
assert.equal(readFileSync(join(dir, "BOM.csv"), "utf8"), bom(purchased), "BOM differs from circuit")
assert.equal(readFileSync(join(dir, "BOM-SMT.csv"), "utf8"), bom(purchased.filter((p) => p.method === "SMT")))
const cpl = parseCsv(readFileSync(join(dir, "CPL.csv"), "utf8"))
const manual = parseCsv(readFileSync(join(dir, "manual-assembly.csv"), "utf8"))
assert.deepEqual(sorted(cpl.map((r) => r.Designator)), sorted(purchased.filter((p) => p.method === "SMT").map((p) => p.name)))
assert.deepEqual(sorted(manual.map((r) => r.Designator)), sorted(purchased.filter((p) => p.method !== "SMT").map((p) => p.name)))
for (const row of [...cpl, ...manual]) {
  const p = purchased.find((p) => p.name === row.Designator)
  assert(p)
  assert(Math.abs(Number(row["Mid X"]) - p.pcb.center.x) < 0.000001)
  assert(Math.abs(Number(row["Mid Y"]) - p.pcb.center.y) < 0.000001)
  assert.equal(Number(row.Rotation), p.pcb.rotation)
  assert.equal(row.Layer, p.pcb.layer)
}
const pinmap = parseCsv(readFileSync(join(dir, "PINMAP.csv"), "utf8"))
const componentIds = new Set(parts.map((p) => p.source.source_component_id))
// Manually placed vias also have synthetic source ports, but are not components.
const expectedPins = circuit.filter((e) => e.type === "source_port" && componentIds.has(e.source_component_id)).map((p) => {
  const part = parts.find((x) => x.source.source_component_id === p.source_component_id)
  assert(part, `Pin references an unknown component: ${p.source_port_id}`)
  return `${part.name}:${p.pin_number}`
})
assert.deepEqual(sorted([...new Set(pinmap.map((p) => `${p.Designator}:${p.Pin}`))]), sorted(expectedPins))
assert(pinmap.every((p) => p.Net && p.Status !== "unresolved"))
assert(pinmap.some((p) => p.Designator === "J1" && p.Pin === "2" && p.Net === "AC_N"))
assert.equal(pinmap.filter((p) => p.Status === "intentional-no-connect").length, 2)
for (const name of ["mains", "pd"]) assert(readFileSync(join(dir, `schematic-${name}.svg`), "utf8").includes("<svg"))
const validation = readJson(join(dir, "validation.json"))
assert.equal(validation.circuit_sha256, manifest.circuit_sha256)
assert.equal(validation.released_for_manufacturing, false)
if (validation.gerbers_generated) {
  assert.equal(validation.checks.find((c) => c.name === "shorts")?.status, "passed")
  assert.equal(validation.checks.find((c) => c.name === "routing")?.status, "passed")
  assert.equal(validation.source_errors.length, 0)
  const zip = join(dir, "Gerbers.zip")
  execFileSync("unzip", ["-t", zip])
  const entries = execFileSync("unzip", ["-Z1", zip], { encoding: "utf8" }).trim().split("\n")
  assert.deepEqual(sorted(entries), sorted(Object.keys(manifest.files).filter((p) => p.startsWith("gerbers/")).map((p) => p.slice(8))))
  for (const name of entries) {
    const data = execFileSync("unzip", ["-p", zip, name], { maxBuffer: 32 * 1024 * 1024 })
    assert.equal(sha256(data), manifest.files[`gerbers/${name}`], `Archive differs: ${name}`)
    const text = data.toString()
    if (name.endsWith(".gbr")) assert(text.includes("M02*"), `Incomplete Gerber: ${name}`)
    if (name.endsWith(".drl")) assert(text.includes("M30"), `Incomplete drill file: ${name}`)
  }
} else assert(!existsSync(join(dir, "Gerbers.zip")), "Stale Gerbers present after failed gate")
console.log(`Fabrication integrity passed: ${purchased.length} purchased parts, ${cpl.length} SMT, ${manual.length} manual/mixed, ${pinmap.length} pin rows. Source and archive hashes match.`)
const open = validation.checks.filter((c) => c.status !== "passed")
console.log(`Manufacturing release: no. Checks requiring review: ${open.map((c) => c.name).join(", ") || "none"}. See validation.json for physical review requirements.`)
