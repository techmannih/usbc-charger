# Design risk register

| Risk | Current control | Residual action / release gate |
| --- | --- | --- |
| Lethal mains contact | Primary zone, 8 mm copper keepout, warning marks | Final enclosure accessibility, wiring, dielectric and construction tests must pass |
| Fire during surge or abnormal load | Fuse, MOV, NTC, encapsulated module | Lab must validate fuse/MOV coordination, fault behavior, flame containment and real component approvals |
| Isolation approval assumed from U1 | Encapsulated module replaces custom transformer | Obtain current supplier certification evidence and test the complete end product; module evidence does not transfer automatically |
| PCB spacing misunderstood | Conservative 8 mm copper corridor | Lab must calculate and measure required creepage/clearance for actual standard, voltage, material group, pollution degree and altitude |
| Unsafe mains cable entry | Cable aperture/terminal model provided | Production cord, plug, gland and independent strain relief must be specified and mechanically tested |
| FDM enclosure used as finished housing | Model is explicitly marked fit-check only | Release only injection-molded or otherwise lab-approved flame-retardant production construction |
| Surge suppressor end-of-life | 300 VAC MOV behind fuse | Confirm energy rating, fault mode, thermal/fire behavior and surge life in accredited testing |
| Limited AC/DC-to-USB power headroom | 15 V / 1.333 A module, synchronous buck SoC and isolated-side test points | Measure input power, efficiency, regulation and closed-enclosure temperature rise at every 18 W operating point across mains/ambient limits; revise the rating or architecture if U1 derating or converter losses exhaust margin |
| 12 V / 1.5 A operation from a 15 V rail | 15 V is within the IP6520 input range and the design follows the reference power stage | Validate dropout, startup, load transients, regulation and protection on hardware; the datasheet's 12 V electrical-characteristic point is at 24 V input |
| USB overvoltage/ESD | VBUS TVS and CC/data ESD clamps | Validate clamp behavior, PD transitions, ESD and connector/cable cases on hardware |
| Incorrect PD marketing | Standard IP6520 source-PDO design; no PPS claim | Confirm the exact non-PPS U2 marking and verify 5 V / 3 A, 9 V / 2 A, and 12 V / 1.5 A source capabilities with a protocol analyzer; no certified logo before TID |
| Supplier substitution | Exact MPNs and supplier IDs captured; other IP6520 variants explicitly excluded | Approved-vendor list, incoming inspection and certification-impact review for every change |
| CAD success mistaken for compliance | Automated netlist/placement/short checks | Physical electrical-safety, EMC, thermal, mechanical and USB tests remain mandatory |
