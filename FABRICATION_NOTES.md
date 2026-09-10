# Fabrication notes

Use [`fabrication/README.md`](fabrication/README.md) as the file index. The
export is an engineering review package for this 18 W charger revision.
`manifest.json` records the exact source, circuit, tool versions and file hashes;
`validation.json` records automated results and outstanding reviews.

## Board construction

| Parameter | Current design |
| --- | --- |
| Outline | 110 × 60 mm, 2 mm rounded corners |
| Layers / thickness / material | Two copper layers / 1.6 mm / FR-4 |
| Solder mask | Green (`#176b43`) |
| Mounting | Four Ø3.2 mm NPTHs, at (±50, ±25) mm |
| Coordinate origin | Board centre, mm; +X right, +Y up; rotations CCW |
| Primary / isolated boundary | All-layer copper keepout, x = 6…14 mm |
| Copper weight / finish / panel | To be agreed with fabricator; not specified by the current TSX |

The minimum geometry actually present is reported by the exporter. The board's
generic CAD minima are not mains spacing requirements. Inspect copper, drill
files and assembled parts together at the isolation boundary. Keep the ground
pour on the isolated side.

## CAM and assembly review

Check outline dimensions, PTH versus NPTH drilling, J2 plated slots, hole sizes,
annular rings, mask openings and paste before fabrication. The four U2 thermal
vias are Ø0.25 mm drills in Ø0.55 mm pads inside its exposed pad; agree the
via-in-pad and stencil process with the assembler. Auto-routed vias may use
different dimensions; inspect `geometry.json` for measured minima.

`CPL.csv` contains surface-mount placements only. Through-hole parts and the
mixed SMT/PTH USB connector are listed separately in `manual-assembly.csv`.
Their omission from CPL is an assembly-process decision, not a DNP instruction.
TP1–TP3 are bare copper pads; H1–H4 are drilled features, not purchased parts.
See [`ASSEMBLY_REQUIREMENTS.md`](fabrication/ASSEMBLY_REQUIREMENTS.md).

Positions are native CAD component centres, with no Y-axis flip or supplier
rotation correction. A fabricator's pin-1/centroid preview must be reviewed for
every placement. Do not assume CAD rotation zero is the supplier's rotation zero.

The automated workflow retains existing placement suggestions as open items.
It refuses to issue a Gerber archive if the routed artifact has errors or fails
the copper-shorts check. Production approval additionally depends on the
existing lab, enclosure and compliance documents.

## Regeneration

```sh
bun install --frozen-lockfile
bun run export:fabrication
bun run check:fabrication
```

The exporter performs a fresh build using the local imported footprints, records
checks, generates BOM/CPL/pinmap/review drawings, and exports Gerbers from that
same circuit JSON. Do not assemble files from different runs or hand-edit
generated CSV, Gerber or manifest files.
