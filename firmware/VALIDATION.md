# Controller verification status

| Item | Status |
| --- | --- |
| Flashable application / toolchain | Not applicable: no programmable MCU on this board |
| Expected PDO declaration | Design target in `expected-pdos.json` |
| Host checker | `bun run check:pdos <capture.json>`; decoded records only |
| Actual Source_Capabilities capture | Not supplied |
| Real 15 V to 12 V / 1.5 A load test | Not supplied |
| Continuous full-load thermal test | Not supplied |
| Cable orientation, attach/detach and fault recovery | Not supplied |

Record actual sample IDs and analyzer log filenames before changing hardware
test statuses. A passing fixture used to exercise the host checker is not a
hardware pass. Full test requirements are in
[`LAB_VALIDATION_PLAN.md`](../LAB_VALIDATION_PLAN.md).
