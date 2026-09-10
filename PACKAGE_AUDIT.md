# Footprint and package audit

This document identifies package checks for the current imports. It records
the review scope; it is not a completed manufacturer-drawing audit.

| Parts | Source / check |
| --- | --- |
| U1 | `imports/HLK_20M15C.tsx`: module pin numbering, 15 V polarity, body and lead clearance |
| U2 | `imports/IP6520.tsx`: ESOP8/EP pin 9, exposed-pad dimensions and thermal-via process |
| J1 | `imports/WJ500V_5_08_2P.tsx`: 5.08 mm terminals, AC neutral alias, cable access |
| J2 | `imports/TYPE_C_31_M_12.tsx`: 16 selectors, duplicated contacts, SMT land pattern, plated slots and NPTH locating holes |
| LCM1 | `imports/XRSQ1010_10mH_H.tsx`: winding pairs, four lead positions and full body outline |
| L1 | `imports/PDMTAT068125_220MLU.tsx`: actual through-hole package and body orientation |
| C7 | `imports/B32922C3104M189.tsx`: lead spacing and safety-rated body |
| C1/C4 | Imported SMT can footprints: pin-1 polarity and supplier centroid |
| D1/D2 | Imported SMB packages: cathode pad and diode orientation |
| D3–D6 | Imported tiny ESD package: land sizes, pad spacing, stencil and rotation |
| Small R/C parts | Built-in 0603/1206 footprints: land pattern versus exact purchased part |
| F1/RV1/TH1 | Imported footprints: body size, pad/lead form, heat and clearance requirements |

The source carries MPN/supplier IDs, footprint geometry and 3D-model URLs. A
model URL or successful render is not proof that the physical part matches.
Compare manufacturer package drawings with pads, hole dimensions, pin map,
body/courtyard and mechanical fit. Record differences before approving changes.

Generated [`geometry.json`](fabrication/geometry.json) and
[`placement-review.csv`](fabrication/placement-review.csv) support this review.
STEP/GLB models can be regenerated using `bun run build:handoff`; inspect any
reported missing-model downloads separately.
