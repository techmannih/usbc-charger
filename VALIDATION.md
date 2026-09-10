# Validation and reproducibility

Run `bun run export:fabrication` to build and record a fresh review package.
Then run `bun run check:fabrication` to verify source hashes, file hashes, BOM
coverage, SMT/manual membership, placement coordinates, pin-map coverage,
both schematic sheets and Gerber ZIP integrity/content.

`fabrication/validation.json` is the machine-readable record for the generated
artifact, with timestamp, circuit hash, statuses and log paths. The source
manifest includes documentation, circuit imports, scripts, firmware targets,
package.json and bun.lock. Changes require regeneration.

## What the checks mean

| Check | Scope |
| --- | --- |
| Typecheck | TypeScript source consistency |
| Netlist | Declared connections and netlist diagnostics |
| Schematic placement | Readability/layout suggestions; exit 0 can still include suggestions |
| PCB placement | Placement DRC and routing-orientation suggestions |
| Build | Fresh circuit using locked local imports; supplier parts engine disabled |
| Routing | `@tscircuit/checks` routing checks on the exact exported circuit |
| Shorts | Gerber-derived copper bitmap check, both layers, CLI default resolution |
| Fabrication integrity | Export data, source/ZIP hashes and cross-file consistency |
| PDO utility | Comparison of supplied decoded Source_Capabilities records only |

No passing hardware results or supplier approvals are claimed. The existing
placement suggestions are retained as review items. `check:fabrication`
passing means the package is internally consistent; use `validation.json`
to see CAD review items and separate physical release requirements.

## Toolchain

Requires Bun and the `zip`/`unzip` command-line tools (available on macOS and
commonly installed on Linux). Install dependencies with
`bun install --frozen-lockfile`. Exact tool versions used for each generation
are in `fabrication/manifest.json`.

The current script supports one 110 × 60 mm, two-layer board and generates a
sheet SVG for each declared schematic sheet. It does not upload files, place
orders, modify controller firmware, or run remote supplier calibration.
