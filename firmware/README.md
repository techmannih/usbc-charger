# Firmware and controller configuration

This board has no programmable microcontroller, external flash, SWD/JTAG header,
UART console or I²C configuration interface. U2 is the standard non-PPS IP6520
power-conversion/PD source controller. No application binary needs to be built
or flashed for this hardware revision. The pedometer references use an MCU,
BLE and sensors; their firmware cannot run on this charger.

[`expected-pdos.json`](expected-pdos.json) records the design targets from the
main schematic and the exact U2 ordering variant. Editing it does not change
the controller's output behavior. Changing advertised PDOs requires a reviewed
controller/variant or hardware change, followed by hardware verification.

## Files

| File | Purpose |
| --- | --- |
| `expected-pdos.json` | Expected 5 V / 3 A, 9 V / 2 A and 12 V / 1.5 A fixed PDOs |
| `check-pdos.mjs` | Host-side check of decoded protocol-analyzer records |
| `VALIDATION.md` | Software-check scope and hardware evidence status |
| `../FIRMWARE_BRINGUP.md` | Board bring-up, interfaces and observation points |

## Check a protocol capture

Export/decode the analyzer's Source_Capabilities message and map it to this JSON
schema. This is a schema example, not a measured capture; replace the metadata
and PDO values with the actual observation. Keep the original analyzer log.

```json
{
  "schema_version": 1,
  "sample_id": "REPLACE_WITH_ASSEMBLED_SAMPLE_ID",
  "analyzer": "REPLACE_WITH_ANALYZER_MODEL_AND_SERIAL",
  "captured_at": "2026-09-10T00:00:00Z",
  "evidence_file": "REPLACE_WITH_ORIGINAL_ANALYZER_LOG_PATH",
  "source_capabilities": [
    { "type": "fixed", "voltage_v": 5, "current_a": 3 },
    { "type": "fixed", "voltage_v": 9, "current_a": 2 },
    { "type": "fixed", "voltage_v": 12, "current_a": 1.5 }
  ]
}
```

```sh
bun run check:pdos /path/to/capture.json
```

The checker requires the three exact PDOs in the order shown and rejects extra
PDOs/APDOs, wrong types, missing metadata and wrong advertised current/voltage.
It checks the supplied decoded record; it does not authenticate the evidence
file, connect to an analyzer, measure VBUS, test regulation or certify USB-PD.

Reference: [Injoinic IP6520 datasheet linked by this design](https://www.injoinic.com/api/static/uploads/20250529/20250529105252_6837cc049d55b.pdf).
Confirm the standard variant's ordering table; the family contains different
PPS and power-profile variants.
