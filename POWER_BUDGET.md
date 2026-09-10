# Power budget

These calculations use the design's nominal U1 rating of 15 V × 1.333 A =
19.995 W. They are estimates, not measured efficiency or thermal results.

| USB fixed PDO target | Output power | U1 current at 90% buck efficiency | U1 current at 95% buck efficiency |
| --- | --- | --- | --- |
| 5 V / 3 A | 15 W | 1.111 A | 1.053 A |
| 9 V / 2 A | 18 W | 1.333 A | 1.263 A |
| 12 V / 1.5 A | 18 W | 1.333 A | 1.263 A |

`I_U1 = P_USB / (15 V × buck efficiency)`. At 18 W, a nominal 90% conversion
efficiency consumes essentially all of the module's rated output. Even at
95%, only about 1.05 W remains at the module output before accounting for
derating and other losses. Required conversion efficiency at the nominal
module limit is about `18 / 19.995 = 90.02%`.

The input/EMI losses and U1 AC/DC losses add heat and affect overall wall-to-USB
efficiency. They are not included in the buck-only calculation above. Thermal
derating can further reduce the usable 19.995 W module rating.

At the 12 V PDO, nominal input-to-output voltage difference is only 3 V. Verify
dropout, ripple and load transients at the actual minimum 15 V rail. The
datasheet electrical-characteristic point for 12 V / 1.5 A uses 24 V input, so
it is not evidence of measured performance for this board's 15 V input.

## Measurements to retain

Record AC input power, U1 rail voltage/current, USB voltage/current, ambient,
steady-state temperatures and enclosure revision at each PDO and declared
input extreme. Use [`LAB_VALIDATION_PLAN.md`](LAB_VALIDATION_PLAN.md) for the
test scope. No thermal or efficiency measurements have been supplied.

The project name's historic `20w` directory does not change the implemented
18 W target. Exact controller identity and target profiles are in
[`firmware/expected-pdos.json`](firmware/expected-pdos.json).
