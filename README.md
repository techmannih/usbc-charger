# 18 W USB-C PD Wall Charger

This is now the adapter architecture requested: mains goes in through `J1`, and the only USB connector (`J2`) is a USB-C **output** for a C-to-C cable.

```text
85-265 VAC
   |
J1 + time-delay mains fuse
   |
Hi-Link HLK-20M15C isolated AC/DC module
   | 15 V isolated DC
IP6520 autonomous USB-PD buck source
   |
USB-C output: 5 V / 3 A, 9 V / 2 A, 12 V / 1.5 A
```

There is no USB-C input, no custom flyback transformer and no controller firmware to flash. The maximum advertised output is 18 W; PPS is not enabled on the selected plain `IP6520` variant.

`J1` is still a two-pin screw terminal, so this PCB does not plug directly into a wall socket by itself. A rated insulated mains lead/plug, strain relief and flame-retardant touch-safe enclosure are required.

## What changed

The earlier custom DER-628-style power stage was not orderable as drawn because its transformer and EMI chokes required custom magnetics. It has been replaced as a complete power architecture rather than swapping in electrically incompatible generic coils.

- Old custom `T1` flyback transformer: removed.
- Old custom `L1` and `L2` common-mode chokes: removed.
- Old `INN3264C`, synchronous rectifier and `DZ2S100M0L` (`D3`) bias network: removed with the flyback stage.
- Old programmable `CYPD3175`, SWD `J3` pads and firmware profile: removed.
- `U1`: orderable Hi-Link `HLK-20M15C`, which provides the isolated 15 V AC/DC stage and has a working exact JLC CAD model.
- `U2`: orderable Injoinic `IP6520`, which autonomously negotiates USB-C/PD and performs the buck conversion.
- New `L1`: an orderable 22 uH / 16 A, 8 mOhm buck inductor; this reference no longer means a common-mode choke and meets the IP6520 reference circuit's sub-12 mOhm DCR guidance.
- `F1`: orderable 2 A / 250 V slow-blow SMD fuse, selected instead of the unavailable `37013150410`. The rating/type follows Hi-Link's external-fuse recommendation for the 20 W module family.

The 15 V module was selected rather than a 12 V module so the buck converter has regulation headroom for its 12 V PDO under load.

## Orderable BOM

| Ref | Manufacturer part | JLCPCB/LCSC | Function |
| --- | --- | --- | --- |
| J1 | WJ500V-5.08-2P | C8465 | AC line/neutral screw terminal |
| F1 | SCT1032T2A250V | C19712562 | slow-blow mains fuse, 2 A / 250 V |
| U1 | Hi-Link HLK-20M15C | C52746093 | encapsulated 85-265 VAC to 15 V / 1.33 A, 20 W module |
| C1 | RVE100UF35V67RV0072 | C2836437 | 100 uF / 35 V isolated-input bulk capacitor |
| C2, C5 | CC0603KRX7R9BB104 | C14663 | 100 nF / 50 V X7R bypass capacitors |
| U2 | Injoinic IP6520 | C7433861 | autonomous USB-C/PD buck source controller |
| C3 | GRM188Z71E225KE43D | C415535 | 2.2 uF / 25 V bootstrap capacitor |
| L1 | PDMTAT068125-220MLU | C3011539 | 22 uH / 16 A, 8 mOhm buck inductor |
| R1 | FRC0603F2R00TS | C2933191 | 2 ohm switch-node snubber resistor |
| C6 | GRM1885C1H102JA01D | C77026 | 1 nF / 50 V C0G snubber capacitor |
| C4 | RVT1E101M0607 | C72477 | 100 uF / 25 V USB VBUS bulk capacitor |
| R2 | 0603WAF0000T5E | C21189 | 0 ohm USB shell-to-ground link |
| J2 | TYPE-C-31-M-12 | C165948 | USB-C output receptacle |

The special/mechanical parts use exact JLCPCB imports with their catalog footprint and CAD model. Ordinary 0603 passives use tscircuit built-ins and Footprinter footprints, while retaining exact manufacturer and supplier part numbers.

Catalog availability does not guarantee that every through-hole/mixed-technology part will be assembled by a particular JLCPCB service. `U1`, `L1` and `J1` may need manual or through-hole assembly; check live stock and assembly capability before ordering.

## Electrical implementation

The IP6520 application follows the component values in its reference circuit:

- 100 uF / 35 V plus 100 nF at `VIN`
- 2.2 uF from `BST` to `SW`
- 22 uH power inductor from `SW` to `VBUS_OUT`
- 100 uF / 25 V plus 100 nF on USB VBUS
- 2 ohm + 1 nF series snubber from `SW` to ground
- direct CC1, CC2, D+ and D- routing to the USB-C receptacle
- exposed-pad ground vias and a secondary-side bottom ground pour

Power and mains routes have explicit wide traces. The isolated ground pour is restricted to the low-voltage side and does not enter the mains area.

## Production status and safety

This is a **prototype design, not a finished or certified consumer charger**. Using an approved encapsulated AC/DC module removes the custom-transformer manufacturing problem, but the approvals of that module do not automatically certify this PCB or the final adapter.

Before connecting a phone or mains power, the finished product still needs qualified review and testing for:

- fuse coordination and abnormal/fault conditions
- creepage, clearance, dielectric strength and touch current
- surge, EFT, ESD and conducted/radiated EMI
- output short-circuit and attach/detach behavior
- 5 V, 9 V and 12 V PD negotiation with a protocol analyzer
- regulation and thermal rise at 18 W in the final closed enclosure
- plug, cable, strain-relief and fire-enclosure compliance

Do not touch or probe the energized board. First power-up must be performed by a qualified person in an enclosed, current-limited, fused test fixture.

## Verification

Run:

```sh
bun run typecheck
bunx tsci check netlist
bunx tsci check shorts
bunx tsci check placement
bun run build
```

The generated checks validate CAD connectivity, shorts and placement. They do not substitute for USB-PD protocol, electrical-safety, EMI or thermal laboratory tests.

## References

- [Hi-Link HLK-20M15 family product page](https://www.hlktech.net/index.php?cateid=734&id=128)
- [Hi-Link 20 W module datasheet](https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9720W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9120W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf)
- [LCSC IP6520 product page](https://www.lcsc.com/product-detail/Power-Management-Specialized_Injoinic-IP6520_C7433861.html)
- [IP6520 datasheet](https://datasheet.lcsc.com/datasheet/pdf/70dbddfbb53d72ec382491598ecf443f.pdf?productCode=C7433861)
- [LCSC PDMTAT068125-220MLU product page](https://www.lcsc.com/product-detail/C3011539.html)
- [Power Integrations DER-628 report](https://www.power.com/sites/default/files/documents/der-628_18watt_usb_pd_charger_using_innoswitch3-cp_and_cypress_controller.pdf) — retained only as background for why the previous custom-magnetics approach could not use a generic drop-in transformer
