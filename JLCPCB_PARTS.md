# Supplier parts and BOM

[`BOM.csv`](BOM.csv) is the complete purchased electrical BOM, generated from
source MPNs and JLCPCB/LCSC IDs. [`fabrication/BOM-SMT.csv`](fabrication/BOM-SMT.csv)
is the subset matching the SMT placement file. Through-hole and mixed parts
are listed in [`fabrication/manual-assembly.csv`](fabrication/manual-assembly.csv).

Supplier stock, price, basic/extended tier and assembly availability have not
been checked in this handoff. The exporter uses local footprints and does not
replace the source's part identities using live supplier data.

## Ordering constraints

- U2 must be standard non-PPS `IP6520`, `C7433861`. Other IP6520 variants are
  not approved equivalents just because the package matches.
- C7 is the specified class-X2 part; generic 100 nF capacitors are not substitutes.
- Verify exact fuse, MOV, NTC and AC/DC module ratings and documentation.
- Retain electrolytic polarity and voltage rating: C1 = 100 µF / 35 V,
  C4 = 100 µF / 25 V.
- L1 is `PDMTAT068125-220MLU`, a through-hole part in this import; verify its
  real package, electrical rating and envelope before order.
- TP1–TP3 and H1–H4 are PCB features, excluded from procurement/CPL.

The all-parts BOM is useful for procurement; upload the SMT subset only when
requesting SMT assembly. Quote the manual/mixed list separately with the
assembler. External cable, plug, gland, mounting hardware and production
enclosure need their own mechanical purchasing list.

An updated supplier quote or substitution review should identify the source
manifest, reviewer, date, approved MPN/LCSC identity and verified supplier
rotation. No such approvals are implied by the generated CSVs.
