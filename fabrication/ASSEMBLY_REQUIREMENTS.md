# Assembly requirements

## Parts and process

Use the full `BOM.csv` for procurement, `BOM-SMT.csv` plus `CPL.csv` for the
surface-mount subset, and `manual-assembly.csv` for the remaining fitted parts.
Mount types are determined from the actual imported copper/hole geometry.
They are not inferred from reference prefixes or descriptions.

The current board uses SMT F1, C1/C4 electrolytics, the remaining small passives,
D1–D6 and U2. J1, RV1, TH1, LCM1, C7, U1 and L1 use plated through-holes. J2
uses SMT contacts and through-hole shell tabs. Agree reflow/selective/hand-solder
sequence and thermal profiles with the assembler; no process is qualified here.

## Orientation and pin checks

- U1: pin 4 is +15 V; pin 3 is isolated GND; pins 1/2 are AC input.
- U2: verify standard `IP6520` marking, pin 1 and exposed pad 9 to GND.
- C1/C4: positive terminal is pin 1. Compare the real case polarity mark with
  `PINMAP.csv` and the native footprint, especially C4's 180° placement.
- D1/D2: cathode is pin 1; D1 goes to VIN_15V, D2 to VBUS_OUT.
- LCM1: pin 1/2 form the line path; pin 4/3 form the neutral path.
- J1: the pin-2 `GND` import alias means AC neutral here, not isolated GND.
- J2: solder the duplicated VBUS/GND/data contacts and shell tabs. SBU1/SBU2
  are intentionally unconnected.

Use `placement-review.csv` to sign off supplier centroids and rotations. Raw
CAD centres and pin locations are supplied to support review, not to claim
supplier calibration.

## Stencil, inspection and mechanics

Review U2 exposed-pad paste segmentation and the four thermal vias for solder
wicking/voiding. Inspect J2's fine-pitch contacts for bridges and its shell
retention. Verify component bodies, solder protrusions, mounting hardware and
cable strain relief against the enclosure and isolation space.

TP1–TP3 are probe pads requiring no assembly part. H1–H4 are NPTH mounting
features; screws, spacers, cord, plug, gland and production enclosure are
external mechanical purchases, not included in the electrical BOM.

Incoming verification of mains-rated parts and U1 documentation follows
[`COMPLIANCE_PLAN.md`](../COMPLIANCE_PLAN.md). Powered first-article checks
follow [`FIRMWARE_BRINGUP.md`](../FIRMWARE_BRINGUP.md) and
[`LAB_VALIDATION_PLAN.md`](../LAB_VALIDATION_PLAN.md).
