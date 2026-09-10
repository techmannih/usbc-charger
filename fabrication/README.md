# Charger fabrication package

Generated from `index.circuit.tsx` by `bun run export:fabrication`.
This directory is intentionally versioned so the files are visible alongside
the source in repository and tscircuit file browsers.

| File | Contents |
| --- | --- |
| `BOM.csv` | Complete grouped purchased-parts BOM; same as root `BOM.csv` |
| `BOM-SMT.csv` | BOM subset corresponding exactly to `CPL.csv` |
| `CPL.csv` | SMT component centres and native CAD rotations |
| `manual-assembly.csv` | Through-hole and mixed-technology components to fit |
| `PINMAP.csv` | Every source pin, net, aliases and physical pad coordinates |
| `placement-review.csv` | All purchased parts, process and orientation review status |
| `Gerbers.zip` | Copper, mask, paste, silkscreen, outline and Excellon drill files |
| `gerbers/` | Same CAM files unpacked for inspection |
| `pcb.svg`, `assembly.svg` | PCB and assembly review drawings |
| `schematic-mains.svg`, `schematic-pd.svg` | Both schematic sheets |
| `netlist.txt`, `circuit.json` | Readable netlist and exact export input |
| `geometry.json` | Measured geometry inventory and export coordinate convention |
| `validation.json`, `checks/` | Check outcomes and retained command logs |
| `manifest.json` | Source, tool and artifact SHA-256 provenance |
| `ASSEMBLY_REQUIREMENTS.md` | Assembly process, polarity and part checks |
| `REFERENCE_COMPARISON.md` | Mapping from the three reference pedometer projects |

The archive is produced only after the current artifact's routing and copper
shorts checks pass. Review `validation.json` for all other issues; an available
Gerber archive does not indicate a production release. If a later run fails
the gate, the previous archive is moved into ignored `dist/fabrication-obsolete/`
and excluded from the current manifest.

All coordinates use mm, board-centre origin, +Y up and CCW degrees. CPL includes
only pure SMT purchased parts. Fit the parts in `manual-assembly.csv` too;
J2's electrical contacts are SMT while its shell tabs are plated holes.

The exporter replaces only its own generated outputs. Keep hand-maintained
notes in Markdown. Regenerate after changing the circuit, imports, toolchain,
firmware targets or export scripts; `bun run check:fabrication` detects stale
sources and mismatched artifacts.

For optional STEP, GLB and KiCad outputs, use `bun run build:handoff`; these
remain under ignored `dist/index/` because they are large and can depend on
remote component models. Regenerate them from the current source before use.
