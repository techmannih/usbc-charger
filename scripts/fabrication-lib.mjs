import { createHash } from "node:crypto"
import { readFileSync, readdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

export const root = dirname(dirname(fileURLToPath(import.meta.url)))
export const sha256 = (data) => createHash("sha256").update(data).digest("hex")
export const hashFile = (path) => sha256(readFileSync(path))
export const readJson = (path) => JSON.parse(readFileSync(path, "utf8"))
export const sorted = (items) => [...items].sort((a, b) => a.localeCompare(b, "en", { numeric: true }))

export function walk(dir) {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const path = `${dir}/${entry.name}`
    return entry.isDirectory() ? walk(path) : entry.isFile() ? [path] : []
  })
}

export function sourceFiles() {
  return sorted([
    ...readdirSync(root).filter((name) => /\.(tsx?|md)$/.test(name)),
    "package.json", "bun.lock", "tsconfig.json", "tscircuit.config.json",
    ...["imports", "scripts", "firmware", "mechanical"].flatMap(walk),
    ...readdirSync(join(root, "fabrication")).filter((p) => p.endsWith(".md")).map((p) => `fabrication/${p}`),
  ])
}

export const csv = (header, rows) => [header, ...rows].map((row) => row.map((v) => {
  const value = String(v ?? "")
  return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value
}).join(",")).join("\n") + "\n"

export function parseCsv(text) {
  const rows = []
  let row = [], value = "", quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (c === '"') {
      if (quoted && text[i + 1] === '"') { value += '"'; i++ }
      else quoted = !quoted
    } else if (c === "," && !quoted) { row.push(value); value = "" }
    else if (c === "\n" && !quoted) { row.push(value.replace(/\r$/, "")); rows.push(row); row = []; value = "" }
    else value += c
  }
  if (quoted) throw new Error("Unterminated quoted CSV field")
  if (row.length || value) { row.push(value); rows.push(row) }
  const [header, ...data] = rows
  if (!header) throw new Error("Empty CSV")
  return data.map((r) => {
    if (r.length !== header.length) throw new Error("CSV column count mismatch")
    return Object.fromEntries(header.map((h, i) => [h, r[i]]))
  })
}

export function inventory(circuit) {
  const byType = (type) => circuit.filter((e) => e.type === type)
  const boards = byType("pcb_board")
  if (boards.length !== 1) throw new Error("Exporter requires exactly one board")
  const parts = byType("source_component").map((source) => {
    const pcb = byType("pcb_component").find((p) => p.source_component_id === source.source_component_id)
    if (!pcb) throw new Error(`Missing PCB placement: ${source.name}`)
    const smt = byType("pcb_smtpad").filter((p) => p.pcb_component_id === pcb.pcb_component_id)
    const pth = byType("pcb_plated_hole").filter((p) => p.pcb_component_id === pcb.pcb_component_id)
    const bare = source.ftype === "simple_test_point" && source.footprint_variant === "pad"
    const dnp = source.do_not_place === true || pcb.do_not_place === true
    const method = bare ? "bare-pad" : dnp ? "DNP" : smt.length && pth.length ? "mixed" : pth.length ? "through-hole" : smt.length ? "SMT" : "unknown"
    const mpn = source.manufacturer_part_number ?? ""
    const lcsc = source.supplier_part_numbers?.jlcpcb?.[0] ?? ""
    if (!bare && !dnp && (!mpn || !/^C\d+$/.test(lcsc) || method === "unknown")) {
      throw new Error(`Unresolved purchased part: ${source.name}`)
    }
    const value = source.display_capacitance ?? source.display_resistance ?? source.display_inductance
      ?? [source.display_current_rating, source.display_voltage_rating].filter(Boolean).join(" / ")
      ?? ""
    const footprint = source.footprint ?? `${mpn || source.name} (${method}; ${smt.length} SMT pads; ${pth.length} PTH)`
    const comment = [value, source.max_voltage_rating ? `${source.max_voltage_rating}V` : "", mpn].filter(Boolean).join(" ")
    return { name: source.name, source, pcb, smt, pth, bare, dnp, method, mpn, lcsc, footprint, comment }
  }).sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))
  const names = parts.map((p) => p.name)
  if (new Set(names).size !== names.length) throw new Error("Duplicate reference designators")
  return { board: boards[0], parts, purchased: parts.filter((p) => !p.bare && !p.dnp), byType }
}

export function bom(parts) {
  const groups = new Map()
  for (const p of parts) {
    const key = JSON.stringify([p.mpn, p.lcsc, p.comment, p.footprint, p.method])
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(p)
  }
  return csv(["Comment", "Designator", "Footprint", "LCSC Part #", "Quantity", "Manufacturer Part Number", "Assembly"],
    [...groups.values()].map((ps) => [ps[0].comment, ps.map((p) => p.name).join(","), ps[0].footprint, ps[0].lcsc, ps.length, ps[0].mpn, ps[0].method]))
}
