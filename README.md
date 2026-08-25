# 18 W USB-C PD charger — engineering validation design

This repository contains a safety-hardened **engineering prototype**, not a certified consumer charger. It accepts mains through a cable/terminal input and provides a USB-C source output. Do not connect it to mains or a phone until a qualified safety engineer has reviewed the assembled board and the complete closed enclosure.

```text
100–240 VAC product rating (85–265 VAC module operating range)
  → 2 A time-delay fuse
  → MOV surge clamp + NTC inrush limiter
  → two-line common-mode choke + 305 VAC X2 capacitor/bleeders
  → HLK-20M15C isolated 15 V / 20 W AC/DC module
  → 15 V TVS
  → IP6520 buck/USB-PD source
  → 12 V VBUS TVS + CC/D+/D− ESD clamps
  → USB-C: 5 V / 3 A, 9 V / 2 A, 12 V / 1.5 A (18 W maximum)
```

The selected plain IP6520 variant advertises fixed PDOs; this design does not claim PPS. There is no USB-C input and no application firmware to flash.

## Safety provisions now in the design

- Fused line input, 300 VAC MOV surge suppression and a 5 Ω NTC inrush limiter.
- Two-line 10 mH common-mode choke, a safety-rated 100 nF/305 VAC X2 capacitor and two series bleeder resistors.
- Encapsulated isolated AC/DC module instead of an undocumented custom flyback transformer.
- An 8 mm, all-copper-layer keepout corridor between primary and SELV circuitry.
- Separate secondary-only ground pour; no protective-earth assumption (Class II construction must be assessed as a complete product).
- 15 V input and 12 V USB-VBUS TVS protection, plus low-capacitance clamps on CC1, CC2, D+ and D−.
- Explicit power trace widths, exposed-pad ground vias, mounting holes and isolated-side test points.
- Mains hazard, product rating and `ENGINEERING SAMPLE - NOT CERTIFIED` markings.
- A parametric FDM shell and connector apertures for mechanical fit checking only.

The FDM shell is **not** a production fire enclosure. The final product needs lab-reviewed flame-retardant material, inaccessible live parts, approved cable entry/strain relief, adequate internal spacings, secure standoffs and production tooling. A standalone fit-check source is included at [mechanical/enclosure-fit-check.scad](mechanical/enclosure-fit-check.scad); see [ENCLOSURE_REQUIREMENTS.md](ENCLOSURE_REQUIREMENTS.md) before using it.

## Safety-critical BOM

| Ref | Manufacturer part | JLCPCB/LCSC | Function |
| --- | --- | --- | --- |
| J1 | WJ500V-5.08-2P | C8465 | Internal AC line/neutral termination |
| F1 | SCT1032T2A250V | C19712562 | 2 A / 250 V time-delay mains fuse |
| RV1 | Bourns MOV-14D471K | C1527439 | 300 VAC MOV surge clamp |
| TH1 | MF72 5D9 | C11277 | 5 Ω / 3 A NTC inrush limiter |
| LCM1 | XRSQ1010-10mH-H | C5380257 | 10 mH / 1.2 A two-line common-mode choke |
| C7 | TDK B32922C3104M189 | C125429 | 100 nF / 305 VAC class-X2 capacitor |
| R3, R4 | 1206W4F1004T5E | C17927 | Series 1 MΩ / 200 V X-capacitor bleeders |
| U1 | Hi-Link HLK-20M15C | C52746093 | 85–265 VAC to isolated 15 V / 1.33 A module |
| D1 | ST SMBJ15A | C83846 | 15 V rail TVS |
| U2 | Injoinic IP6520 | C7433861 | Autonomous USB-C/PD buck source controller |
| L1 | PDMTAT068125-220MLU | C3011539 | 22 µH / 16 A buck inductor |
| D2 | SMBJ13A | C19077567 | USB VBUS TVS |
| D3–D6 | PESD5V0H1BSF | C477989 | CC and USB 2.0 data ESD protection |
| J2 | TYPE-C-31-M-12 | C165948 | USB-C source receptacle |

Other power-stage values follow the IP6520 reference application: 100 µF + 100 nF on 15 V input, 2.2 µF bootstrap capacitor, 22 µH inductor, 100 µF + 100 nF on VBUS and a 2 Ω/1 nF switch-node snubber.

Supplier catalogue availability is not an assembly guarantee. Incoming inspection must confirm exact manufacturer, marking, rating and current approval evidence for every safety-critical lot; substitutions require engineering and lab review.

## Build and checks

Install dependencies, then run:

```sh
bun install
bun run verify
bun run build:preview
bun run build:handoff
```

Outputs are written under `dist/index/`. CAD checks validate connectivity, overlap, placement and routing consistency; they do not establish electrical safety, USB compliance, EMC performance or thermal margin.

## Certification handoff

- [COMPLIANCE_PLAN.md](COMPLIANCE_PLAN.md) maps the intended product to current India and USB-IF workstreams and records what remains unproven.
- [LAB_VALIDATION_PLAN.md](LAB_VALIDATION_PLAN.md) is the controlled test and evidence checklist for an accredited lab.
- [ENCLOSURE_REQUIREMENTS.md](ENCLOSURE_REQUIREMENTS.md) defines the mechanical safety requirements for the production enclosure.
- [DESIGN_RISK_REGISTER.md](DESIGN_RISK_REGISTER.md) records residual risks and release gates.

India's current BIS compulsory-registration material lists power adaptors for IT equipment under IS 13252 (Part 1):2010; the lab and certification body must confirm the exact applicable edition/amendments and product classification when the application is opened. USB-IF certification is a separate process requiring the applicable USB Type-C/PD compliance tests and a valid TID/listing.

## Primary references

- [BIS products under compulsory registration](https://www.bis.gov.in/product-certification/products-under-compulsory-certification/scheme-ii-registration-scheme/)
- [BIS uniform test report format for power adaptors](https://www.bis.gov.in/PDF/UTRFs/FINALIZED_TRF_IS_13252_A1_A2_Power_Adaptor_for_IT_Equipment_V1_3.pdf)
- [USB-IF USB Type-C and USB Power Delivery compliance overview](https://www.usb.org/usbc)
- [USB-IF compliance program](https://www.usb.org/compliance)
- [Hi-Link 20 W module product page](https://www.hlktech.net/index.php?cateid=734&id=128)
- [Injoinic IP6520 datasheet](https://www.injoinic.com/api/static/uploads/20250529/20250529105252_6837cc049d55b.pdf)
- [TDK B32922C3104M189 X2 capacitor](https://product.tdk.com/en/search/capacitor/film/emi-suppression/info?part_no=B32922C3104M189)
- [Bourns MOV-14D series datasheet](https://www.bourns.com/docs/Product-Datasheets/MOV14D.pdf)
