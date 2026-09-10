# Reference project comparison

Public file inventories inspected on 2026-09-10 through the tscircuit registry.
The references inform project organization. The charger outputs are generated
from this charger's hardware; no pedometer firmware or fabrication geometry is
copied.

| Project | Inspected version | Release ID |
| --- | --- | --- |
| [techmannih/Bluetooth-pedometer](https://tscircuit.com/techmannih/Bluetooth-pedometer#files) | 1.0.17 | `194fff09-8b0c-491b-9c5b-1df0de933a0b` |
| [imrishabh18/pedometer](https://tscircuit.com/imrishabh18/pedometer#files) | 1.1.3 | `1c7b0745-f622-4f7d-8d72-542968f288fb` |
| [AnasSarkiz/ble-pedometer](https://tscircuit.com/AnasSarkiz/ble-pedometer#files) | 1.0.7 | `94eaf959-3a56-4415-8861-8738e7976a17` |

| Observed files / category | Charger equivalent |
| --- | --- |
| `BOM.csv`, `BOM.md`, `fabrication/BOM.csv` | Root and fabrication BOM plus SMT subset |
| `fabrication/CPL.csv`, placement review | `CPL.csv`, `manual-assembly.csv`, `placement-review.csv` |
| `PINMAP.md`, `fabrication/PINMAP.csv` | `PINMAP.md` and generated complete `PINMAP.csv` |
| `fabrication/Gerbers.zip`, `review/manufacturing/` | Gated `Gerbers.zip` and unpacked `gerbers/` |
| `FABRICATION_NOTES.md`, `docs/fabrication-review.md` | Root fabrication notes and machine-readable check records |
| Assembly requirement documents | `fabrication/ASSEMBLY_REQUIREMENTS.md` |
| `FIRMWARE_BRINGUP.md`, `docs/programming.md`, `CHARGER_BRINGUP.md` | Charger-specific `FIRMWARE_BRINGUP.md` |
| `firmware/src/`, MCU C sources, BLE and sensor drivers | Not applicable to the autonomous IP6520; `firmware/` documents this and supplies a host PDO checker |
| `companion/read_steps.py` | Not applicable: this charger has no step/BLE data stream |
| `POWER_BUDGET.md`, `docs/power-budget.md` | Charger conversion-efficiency and module-headroom calculation |
| `DESIGN_REVIEW.md`, package/datasheet/stock audits | `DESIGN_REVIEW.md`, `PACKAGE_AUDIT.md`, `JLCPCB_PARTS.md` |
| `VALIDATION.md`, `DRC_REPORT.md`, `review/validation.json` | `VALIDATION.md`, `DRC_REPORT.md`, `fabrication/validation.json` and logs |
| Export/check scripts | `scripts/export-fabrication.mjs`, `scripts/check-fabrication.mjs` |
| Schematic, PCB, assembly renders | Both charger schematic sheets, `pcb.svg`, `assembly.svg` |
| Pedometer BGA/RF fanout patches and sensor vendor code | Not applicable to this two-layer charger |

Some reference archives/derived drawings are listed by their own manifests but
are not exposed in their public file inventories. This comparison does not
claim that every reference archive was downloaded or independently validated.
