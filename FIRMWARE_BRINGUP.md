# Controller and board bring-up

U2 operates autonomously; no firmware flashing step exists in this revision.
The [`firmware/`](firmware/README.md) folder contains the expected controller
profile and a utility for checking decoded protocol captures.

## Traceability and configuration

Record PCB/source revision, the fabrication manifest hash, U1 and U2 markings,
component substitutions, sample serial number and test equipment. Confirm that
U2 is `IP6520`, LCSC `C7433861`, standard non-PPS. Neither the USB-C connector nor
the test points provide a programming port.

## Interfaces and observation points

| Interface | Mapping / expected role |
| --- | --- |
| J1 pin 1 | AC line (`AC_L`) |
| J1 pin 2 | AC neutral (`AC_N`); imported alias `GND` here does **not** mean isolated ground |
| U1 pin 4 / pin 3 | Isolated +15 V / GND |
| TP1 / TP2 | Isolated `VIN_15V` / GND |
| TP3 / TP2 | USB `VBUS_OUT` / GND |
| U2 pin 7 / pin 8 | CC1 / CC2 to J2 |
| U2 pin 6 / pin 5 | D+ / D− charging-protocol signals to J2 |
| J2 shell | `USB_SHIELD`, connected to GND through R2 = 0 Ω |

[`fabrication/PINMAP.csv`](fabrication/PINMAP.csv) is the generated complete
pin/net/PCB-position map, including the intentionally unconnected J2 SBU pins.

## Verification sequence

1. Check assembled BOM, polarity, solder joints, U2 exposed-pad soldering,
   connector pinout and spacing against the generated assembly drawing.
2. Use the qualified-lab setup described in
   [`LAB_VALIDATION_PLAN.md`](LAB_VALIDATION_PLAN.md) for powered testing.
   Record the actual isolated 15 V rail and attached-sink default 5 V behavior.
3. Capture Source_Capabilities for both cable orientations. Compare the decoded
   record using `bun run check:pdos <capture.json>`.
4. Exercise the three PDOs with the lab's PD sink/electronic load, retaining
   voltage/current, ripple, transition, dropout and protection observations.
5. Complete the 18 W closed-enclosure thermal and input-power tests. In
   particular, validate 12 V / 1.5 A from the actual 15 V module output.

No measured hardware results are included. See [`POWER_BUDGET.md`](POWER_BUDGET.md)
for calculated headroom and [`firmware/VALIDATION.md`](firmware/VALIDATION.md)
for evidence still to collect.
