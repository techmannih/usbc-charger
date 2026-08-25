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
| Overtemperature at 18 W | Efficient module/buck architecture and test points | Closed-enclosure temperature-rise and abnormal tests across mains limits must pass |
| USB overvoltage/ESD | VBUS TVS and CC/data ESD clamps | Validate clamp behavior, PD transitions, ESD and connector/cable cases on hardware |
| Incorrect PD marketing | Fixed 5/9/12 V PDO design; no PPS claim | Protocol-analyzer/USB-IF results must match label and datasheet; no certified logo before TID |
| Supplier substitution | Exact MPNs and supplier IDs captured | Approved-vendor list, incoming inspection and certification-impact review for every change |
| CAD success mistaken for compliance | Automated netlist/placement/short checks | Physical electrical-safety, EMC, thermal, mechanical and USB tests remain mandatory |

