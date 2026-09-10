import { readFileSync } from "node:fs"
import { pathToFileURL } from "node:url"

const expected = JSON.parse(readFileSync(new URL("./expected-pdos.json", import.meta.url), "utf8"))

// Compare decoded analyzer data. This does not communicate with or program U2.
export function checkPdos(capture) {
  const issues = []
  if (!capture || typeof capture !== "object" || capture.schema_version !== 1) {
    return ["Capture must be an object with schema_version: 1"]
  }
  for (const key of ["sample_id", "analyzer", "captured_at", "evidence_file"]) {
    if (typeof capture[key] !== "string" || !capture[key].trim()) issues.push(`Missing ${key}`)
  }
  if (typeof capture.captured_at === "string" && !Number.isFinite(Date.parse(capture.captured_at))) {
    issues.push("captured_at must be a valid timestamp")
  }
  const actual = capture.source_capabilities
  if (!Array.isArray(actual)) return [...issues, "source_capabilities must be an array"]
  if (actual.length !== expected.source_capabilities.length) issues.push("Expected exactly three fixed PDOs and no APDOs")
  expected.source_capabilities.forEach((pdo, i) => {
    const got = actual[i]
    if (!got || got.type !== pdo.type || got.voltage_v !== pdo.voltage_v || got.current_a !== pdo.current_a) {
      issues.push(`PDO ${i + 1}: expected fixed ${pdo.voltage_v} V / ${pdo.current_a} A`)
    }
  })
  return issues
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const path = process.argv[2]
  if (!path || path === "--help") {
    console.log("Usage: bun run check:pdos <decoded-analyzer-capture.json>\nSee firmware/README.md for the capture schema. No flashing or device access is performed.")
    process.exit(path ? 0 : 2)
  }
  try {
    const issues = checkPdos(JSON.parse(readFileSync(path, "utf8")))
    if (issues.length) {
      console.error(issues.join("\n"))
      process.exitCode = 1
    } else {
      console.log("Decoded Source_Capabilities matches the three target PDOs. Load, thermal and electrical tests remain separate.")
    }
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
