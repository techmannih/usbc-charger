# Design review

The current implementation is an 18 W, two-layer isolated mains charger with
an HLK-20M15C 15 V supply and standard non-PPS IP6520 output controller.
The reference pedometers provide examples of repository organization; their
BLE, battery-charger, sensor, MCU and RF design details do not apply here.

## Review artifacts

| Review area | Evidence / document |
| --- | --- |
| Architecture, ratings and source | `README.md`, `index.circuit.tsx` |
| Pin/net correspondence | `PINMAP.md`, `fabrication/PINMAP.csv`, `fabrication/netlist.txt` |
| Procurement and assembly | `BOM.csv`, `JLCPCB_PARTS.md`, fabrication BOM/CPL/manual list |
| Package/centroid verification | `PACKAGE_AUDIT.md`, `fabrication/placement-review.csv` |
| Output power and thermal headroom | `POWER_BUDGET.md`, `DESIGN_RISK_REGISTER.md` |
| Controller bring-up | `FIRMWARE_BRINGUP.md`, `firmware/` |
| Automated CAD validation | `VALIDATION.md`, `DRC_REPORT.md`, `fabrication/checks/` |
| Construction and physical tests | Existing compliance, enclosure and lab plans |

## Open findings

The design needs measured verification at 18 W, especially 12 V / 1.5 A from
the 15 V module rail. Supplier orientation/centroid calibration and a physical
footprint audit remain open. The existing placement checker reports orientation
suggestions for C6, D5 and D6; schematic placement also reports readability
suggestions. Their exact outputs are retained with the package.

The fabrication workflow checks routed copper separately from source
connectivity and records source hashes so files from different revisions can
be detected. It keeps the existing hardware validation gates visible and does
not turn a successful CAD check into a production release.
