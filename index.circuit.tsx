import "tscircuit"

import { HLK_20M15C } from "./imports/HLK_20M15C"
import { IP6520 } from "./imports/IP6520"
import { PDMTAT068125_220MLU } from "./imports/PDMTAT068125_220MLU"
import { RVE100UF35V67RV0072 } from "./imports/RVE100UF35V67RV0072"
import { RVT1E101M0607 } from "./imports/RVT1E101M0607"
import { SCT1032T2A250V } from "./imports/SCT1032T2A250V"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"
import { WJ500V_5_08_2P } from "./imports/WJ500V_5_08_2P"

/**
 * Orderable 85-265 VAC to USB-C PD wall-charger prototype.
 *
 * The encapsulated HLK-20M15C module replaces the former custom flyback,
 * transformer and EMI magnetics. IP6520 converts its isolated 15 V output to
 * fixed USB-PD profiles: 5 V / 3 A, 9 V / 2 A and 12 V / 1.5 A (18 W max).
 */
export const UsbCPd18WWallCharger = () => (
  <board
    name="USB_C_PD_18W_WALL_CHARGER"
    title="85-265 VAC to USB-C PD 18 W Module-Based Wall Charger"
    width="110mm"
    height="60mm"
    borderRadius="2mm"
    thickness="1.6mm"
    material="fr4"
    layers={2}
    isViaInPadAllowed
    solderMaskColor="#176b43"
    defaultTraceWidth="0.25mm"
    autorouterVersion="beta_pipeline9"
    autorouterEffortLevel="5x"
    schMaxTraceDistance="3mm"
  >
    <schematicsheet name="mains" displayName="AC Input and Isolated AC/DC Module" sheetIndex={1} />
    <schematicsheet name="pd" displayName="18 W USB-C PD Buck Output" sheetIndex={2} />
    <schematicsection name="ac_input" displayName="Hazardous 85-265 VAC Input" />
    <schematicsection name="isolated_dc" displayName="Isolated 15 V Supply" />
    <schematicsection name="pd_output" displayName="USB-C PD Output" />

    {/* The external mains lead and enclosure must be insulated and strain-relieved. */}
    <WJ500V_5_08_2P
      name="J1"
      pcbX={-49}
      pcbY={22}
      pcbRotation={90}
      schSheetName="mains"
      schSectionName="ac_input"
      schX={-8}
      schY={1}
      connections={{ L: "net.AC_L", N: "net.AC_N" }}
    />
    <SCT1032T2A250V
      name="F1"
      pcbX={-48}
      pcbY={-20}
      schSheetName="mains"
      schSectionName="ac_input"
      schX={-5}
      schY={2}
      connections={{ pin1: "net.AC_L", pin2: "net.AC_L_FUSED" }}
    />
    <HLK_20M15C
      name="U1"
      pcbX={-8}
      pcbY={11}
      schSheetName="mains"
      schSectionName="isolated_dc"
      schX={0}
      schY={1}
      schWidth={2.4}
      schHeight={1.8}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["AC1", "AC2"] },
        rightSide: { direction: "top-to-bottom", pins: ["VOUT_15V", "GND"] },
      }}
      connections={{
        AC2: "net.AC_N",
        AC1: "net.AC_L_FUSED",
        VOUT_15V: "net.VIN_15V",
        GND: "net.GND",
      }}
    />

    {/* IP6520 reference application: local input bulk and high-frequency bypass. */}
    <RVE100UF35V67RV0072
      name="C1"
      maxVoltageRating="35V"
      polarized
      pcbX={26}
      pcbY={-3}
      schSheetName="pd"
      schSectionName="isolated_dc"
      schX={-8}
      schY={3}
      connections={{ pin1: "net.VIN_15V", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="100nF"
      maxVoltageRating="50V"
      manufacturerPartNumber="CC0603KRX7R9BB104"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      footprint="cap0603"
      pcbX={29.5}
      pcbY={-8}
      schSheetName="pd"
      schSectionName="isolated_dc"
      schX={-6}
      schY={3}
      connections={{ pin1: "net.VIN_15V", pin2: "net.GND" }}
    />
    <IP6520
      name="U2"
      pcbX={34}
      pcbY={-3}
      schSheetName="pd"
      schSectionName="pd_output"
      schX={0}
      schY={1}
      schWidth={2.4}
      schHeight={2.2}
      connections={{
        VIN: "net.VIN_15V",
        GND: "net.GND",
        SW: "net.SW",
        BST: "net.BST",
        VOUT: "net.VBUS_OUT",
        DM: "net.USB_DM",
        DP: "net.USB_DP",
        CC1: "net.CC1",
        CC2: "net.CC2",
      }}
    />
    <via name="U2_EP_1" pcbX={33.45} pcbY={-3.45} connectsTo="net.GND" outerDiameter="0.55mm" holeDiameter="0.25mm" />
    <via name="U2_EP_2" pcbX={34.55} pcbY={-3.45} connectsTo="net.GND" outerDiameter="0.55mm" holeDiameter="0.25mm" />
    <via name="U2_EP_3" pcbX={33.45} pcbY={-2.55} connectsTo="net.GND" outerDiameter="0.55mm" holeDiameter="0.25mm" />
    <via name="U2_EP_4" pcbX={34.55} pcbY={-2.55} connectsTo="net.GND" outerDiameter="0.55mm" holeDiameter="0.25mm" />
    <capacitor
      name="C3"
      capacitance="2.2uF"
      maxVoltageRating="25V"
      manufacturerPartNumber="GRM188Z71E225KE43D"
      supplierPartNumbers={{ jlcpcb: ["C415535"] }}
      footprint="cap0603"
      pcbX={38.5}
      pcbY={-7}
      schOrientation="vertical"
      schSheetName="pd"
      schSectionName="pd_output"
      schX={3}
      schY={3}
      connections={{ pin1: "net.BST", pin2: "net.SW" }}
    />

    {/* Orderable 22 uH / 16 A, 8 mOhm buck inductor. The old EMI chokes were removed with the flyback stage. */}
    <PDMTAT068125_220MLU
      name="L1"
      pcbX={43.5}
      pcbY={9}
      pcbRotation={270}
      schSheetName="pd"
      schSectionName="pd_output"
      schX={4}
      schY={1}
      connections={{ pin1: "net.SW", pin2: "net.VBUS_OUT" }}
    />
    <resistor
      name="R1"
      resistance="2ohm"
      tolerance="1%"
      manufacturerPartNumber="FRC0603F2R00TS"
      supplierPartNumbers={{ jlcpcb: ["C2933191"] }}
      footprint="res0603"
      pcbX={33}
      pcbY={-9.5}
      schSheetName="pd"
      schSectionName="pd_output"
      schX={2}
      schY={-2}
      connections={{ pin1: "net.SW", pin2: "net.SNUB" }}
    />
    <capacitor
      name="C6"
      capacitance="1nF"
      maxVoltageRating="50V"
      manufacturerPartNumber="GRM1885C1H102JA01D"
      supplierPartNumbers={{ jlcpcb: ["C77026"] }}
      footprint="cap0603"
      pcbX={36}
      pcbY={-9.5}
      schOrientation="vertical"
      schSheetName="pd"
      schSectionName="pd_output"
      schX={4}
      schY={-2}
      connections={{ pin1: "net.SNUB", pin2: "net.GND" }}
    />

    {/* Output capacitors are rated above the highest 12 V PDO. */}
    <RVT1E101M0607
      name="C4"
      maxVoltageRating="25V"
      polarized
      pcbX={40}
      pcbY={-20}
      pcbRotation={180}
      schSheetName="pd"
      schSectionName="pd_output"
      schX={7}
      schY={3}
      connections={{ pin1: "net.VBUS_OUT", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="0ohm"
      manufacturerPartNumber="0603WAF0000T5E"
      supplierPartNumbers={{ jlcpcb: ["C21189"] }}
      footprint="res0603"
      pcbX={47}
      pcbY={-27}
      schSheetName="pd"
      schSectionName="pd_output"
      schX={10}
      schY={-2}
      connections={{ pin1: "net.USB_SHIELD", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      maxVoltageRating="50V"
      manufacturerPartNumber="CC0603KRX7R9BB104"
      supplierPartNumbers={{ jlcpcb: ["C14663"] }}
      footprint="cap0603"
      pcbX={49}
      pcbY={-4}
      schSheetName="pd"
      schSectionName="pd_output"
      schX={9}
      schY={3}
      connections={{ pin1: "net.VBUS_OUT", pin2: "net.GND" }}
    />
    <TYPE_C_31_M_12
      name="J2"
      pcbX={51}
      pcbY={-15}
      pcbRotation={90}
      schSheetName="pd"
      schSectionName="pd_output"
      schX={11}
      schY={1}
      connections={{
        CC1: "net.CC1",
        CC2: "net.CC2",
        DP1: "net.USB_DP",
        DP2: "net.USB_DP",
        DN1: "net.USB_DM",
        DN2: "net.USB_DM",
        GND1: "net.GND",
        GND2: "net.GND",
        SH1: "net.USB_SHIELD",
        SH2: "net.USB_SHIELD",
        SH3: "net.USB_SHIELD",
        SH4: "net.USB_SHIELD",
      }}
      noConnect={["SBU1", "SBU2"]}
    />

    {/* Ground copper is restricted to the isolated low-voltage side. */}
    <copperpour
      name="ISOLATED_GND_BOTTOM"
      layer="bottom"
      connectsTo="net.GND"
      padMargin="0.2mm"
      traceMargin="0.15mm"
      outline={[{ x: 24, y: -28 }, { x: 54, y: -28 }, { x: 54, y: 28 }, { x: 24, y: 28 }]}
    />

    {/* Mains and power paths use deliberate copper widths. */}
    <trace from=".J1 > .L" to=".F1 > .pin1" width="0.8mm" maxViaCount={0} />
    <trace from=".F1 > .pin2" to=".U1 > .AC1" width="0.8mm" maxViaCount={0} />
    <trace from=".J1 > .N" to=".U1 > .AC2" width="0.8mm" maxViaCount={0} />
    <trace from=".U1 > .VOUT_15V" to=".C1 > .pin1" width="1.5mm" maxViaCount={0} />
    <trace from=".U1 > .GND" to=".C1 > .pin2" width="1.5mm" maxViaCount={0} />
    <trace from=".C1 > .pin1" to=".U2 > .VIN" width="1.2mm" maxViaCount={0} />
    <trace from=".U2 > .SW" to=".L1 > .pin1" width="1.2mm" maxViaCount={0} />
    <trace from=".L1 > .pin2" to=".C4 > .pin1" width="1.5mm" maxViaCount={0} />
    <trace from=".C4 > .pin1" to=".J2 > .VBUS1" width="1.2mm" maxViaCount={0} />
    <trace from=".C4 > .pin1" to=".J2 > .VBUS2" width="1.2mm" maxViaCount={0} />
    <trace from=".C4 > .pin2" to=".J2 > .GND1" width="1.2mm" maxViaCount={1} />
    <trace from=".U2 > .CC1" to=".J2 > .CC1" width="0.2mm" maxViaCount={0} />
    <trace from=".U2 > .CC2" to=".J2 > .CC2" width="0.2mm" maxViaCount={0} />
    <trace from=".U2 > .DP" to=".J2 > .DP1" width="0.2mm" maxViaCount={0} />
    <trace from=".U2 > .DM" to=".J2 > .DN1" width="0.2mm" maxViaCount={0} />

    <silkscreentext text="DANGER: MAINS INPUT" pcbX={-43} pcbY={28} fontSize="0.8mm" />
    <silkscreentext text="HLK-20M15C ISOLATED MODULE" pcbX={-8} pcbY={-8} fontSize="0.75mm" />
    <silkscreentext text="ISOLATED 15V" pcbX={28} pcbY={27} fontSize="0.7mm" />
    <silkscreentext text="USB-C PD OUT" pcbX={46} pcbY={-25} fontSize="0.75mm" />
    <silkscreentext text="5V/3A  9V/2A  12V/1.5A" pcbX={42} pcbY={-28} fontSize="0.65mm" />
  </board>
)

export const UsbCPd18WCharger = UsbCPd18WWallCharger
export default UsbCPd18WWallCharger
