import "tscircuit";

import { AO4407A } from "./imports/AO4407A";
import { CSD17579Q3A } from "./imports/CSD17579Q3A";
import { FXL0630_100_M } from "./imports/FXL0630_100_M";
import { TPS25740ARGER } from "./imports/TPS25740ARGER";
import { TPS54302DDCT } from "./imports/TPS54302DDCT";
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12";
import { WJ500V_5_08_2P } from "./imports/WJ500V_5_08_2P";

/**
 * 12 V DC input to 18 W USB-C Power Delivery source.
 *
 * Advertised PDOs:
 *   - 5 V @ 3 A
 *   - 9 V @ 2 A
 *
 * TPS25740A configuration:
 *   PSEL=GND -> 36 W table entry, PCTRL=GND -> half power (18 W)
 *   HIPWR=DVDD through 100k -> 3 A cable limit and suppresses the 15 V PDO
 *   EN9V=GND -> enables the 9 V PDO
 *
 * Reference topology and placement:
 *   - TI TPS25740A datasheet, Figures 36, 56, 67 and 68
 *   - TI TPS25740AEVM-741 user guide, Figures 2 and 3
 *   - TI TPS54302EVM-716 user guide, Figures 3-1 and 4-1
 */
export const UsbCPd20WCharger = () => (
	<board
		name="USB_C_PD_20W_CHARGER"
		title="12 V to USB-C PD 18 W Charger"
		width="60mm"
		height="28mm"
		borderRadius="2mm"
		thickness="1.6mm"
		material="fr4"
		layers={2}
		solderMaskColor="#176b43"
		defaultTraceWidth="0.25mm"
		schMaxTraceDistance="3mm"
	>
		<schematicsheet name="input" displayName="12 V Input and Protection" sheetIndex={1} />
		<schematicsheet name="buck" displayName="5 V / 9 V Synchronous Buck" sheetIndex={2} />
		<schematicsheet name="pd" displayName="USB-C PD Source and Power Path" sheetIndex={3} />
		<schematicsection name="input_protection" displayName="DC Input and Protection" />
		<schematicsection name="buck_regulator" displayName="5 V / 9 V Buck Regulator" />
		<schematicsection name="pd_source" displayName="USB-C PD Source" />

		<copperpour
			name="GND_BOTTOM"
			layer="bottom"
			connectsTo="net.GND"
			padMargin="0.2mm"
			traceMargin="0.15mm"
			boardEdgeMargin="0.35mm"
		/>

		{/* Left edge: 12 V DC input on a two-pin screw terminal. */}
		<WJ500V_5_08_2P
			name="J1"
			pcbX={-25.5}
			pcbY={0.2}
			pcbRotation={90}
			schSheetName="input"
			schSectionName="input_protection"
			schX={-8}
			schY={2}
			connections={{ VIN_POS: "net.VIN_RAW", GND: "net.GND" }}
		/>
		<fuse
			name="F1"
			currentRating="3A"
			voltageRating="30V"
			footprint="res1206"
			pcbX={-17.0}
			pcbY={8.0}
			pcbRotation={90}
			schSheetName="input"
			schSectionName="input_protection"
			schX={-5.5}
			schY={2}
			connections={{ pin1: "net.VIN_RAW", pin2: "net.VIN_FUSED" }}
		/>
		<AO4407A
			name="Q1"
			pcbX={-16}
			pcbY={0}
			pcbRotation={0}
			schSheetName="input"
			schSectionName="input_protection"
			schX={-2.5}
			schY={2}
			connections={{
				D1: "net.VIN_FUSED",
				D2: "net.VIN_FUSED",
				D3: "net.VIN_FUSED",
				D4: "net.VIN_FUSED",
				S1: "net.VIN",
				S2: "net.VIN",
				S3: "net.VIN",
				G: "net.Q1_GATE",
			}}
		/>
		<resistor
			name="R1"
			resistance="100kohm"
			footprint="res0603"
			pcbX={-16}
			pcbY={-5.5}
			schSheetName="input"
			schSectionName="input_protection"
			schX={0}
			schY={0.5}
			connections={{ pin1: "net.Q1_GATE", pin2: "net.GND" }}
		/>
		<diode
			name="D1"
			manufacturerPartNumber="SMBJ15A"
			tvs
			footprint="smb"
			pcbX={-23}
			pcbY={-9.5}
			pcbRotation={90}
			schSheetName="input"
			schSectionName="input_protection"
			schX={2}
			schY={0.5}
			connections={{ cathode: "net.VIN", anode: "net.GND" }}
		/>
		<capacitor
			name="C1"
			capacitance="47uF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap1210"
			pcbX={-18}
			pcbY={-9}
			schSheetName="input"
			schSectionName="input_protection"
			schX={4.5}
			schY={-1}
			connections={{ pin1: "net.VIN", pin2: "net.GND" }}
		/>

		{/* TPS54302 synchronous buck, default 5 V and CTL2-selected 9 V. */}
		<TPS54302DDCT
			name="U1"
			pcbX={-11}
			pcbY={0}
			pcbRotation={180}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={-2}
			schY={1}
			connections={{
				GND: "net.GND",
				SW: "net.SW",
				VIN: "net.VIN",
				FB: "net.FB",
				EN: "net.BUCK_EN",
				BOOT: "net.BOOT",
			}}
		/>
		<capacitor
			name="C2"
			capacitance="10uF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap1206"
			pcbX={-12}
			pcbY={5.5}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={-6}
			schY={-1}
			connections={{ pin1: "net.VIN", pin2: "net.GND" }}
		/>
		<capacitor
			name="C3"
			capacitance="0.1uF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap0603"
			pcbX={-12}
			pcbY={-5}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={-4.5}
			schY={-1}
			connections={{ pin1: "net.VIN", pin2: "net.GND" }}
		/>
		<resistor
			name="R2"
			resistance="511kohm"
			footprint="res0603"
			pcbX={-10}
			pcbY={7.5}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={-5}
			schY={3.5}
			connections={{ pin1: "net.VIN", pin2: "net.BUCK_EN" }}
		/>
		<resistor
			name="R3"
			resistance="105kohm"
			footprint="res0603"
			pcbX={-6.5}
			pcbY={7.5}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={-5}
			schY={2.2}
			connections={{ pin1: "net.BUCK_EN", pin2: "net.GND" }}
		/>
		<capacitor
			name="C4"
			capacitance="0.1uF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap0603"
			pcbX={-8.5}
			pcbY={-4.5}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={1.5}
			schY={3}
			connections={{ pin1: "net.BOOT", pin2: "net.SW" }}
		/>
		<FXL0630_100_M
			name="L1"
			pcbX={-4}
			pcbY={0}
			pcbRotation={0}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={3.5}
			schY={1}
			connections={{ pin1: "net.SW", pin2: "net.BUCK_OUT" }}
		/>
		<capacitor
			name="C5"
			capacitance="22uF"
			schOrientation="vertical"
			maxVoltageRating="16V"
			footprint="cap1210"
			pcbX={2.8}
			pcbY={3.5}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={6.5}
			schY={-1}
			connections={{ pin1: "net.BUCK_OUT", pin2: "net.GND" }}
		/>
		<capacitor
			name="C6"
			capacitance="22uF"
			schOrientation="vertical"
			maxVoltageRating="16V"
			footprint="cap1210"
			pcbX={2.8}
			pcbY={-3.5}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={8}
			schY={-1}
			connections={{ pin1: "net.BUCK_OUT", pin2: "net.GND" }}
		/>
		<resistor
			name="R4"
			resistance="100kohm"
			footprint="res0603"
			pcbX={-5}
			pcbY={-5.5}
			pcbRotation={90}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={4.5}
			schY={-3}
			connections={{ pin1: "net.BUCK_OUT", pin2: "net.FB" }}
		/>
		<capacitor
			name="C7"
			capacitance="75pF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap0603"
			pcbX={-7}
			pcbY={-7.5}
			pcbRotation={90}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={4.5}
			schY={-4.2}
			connections={{ pin1: "net.BUCK_OUT", pin2: "net.FB" }}
		/>
		<resistor
			name="R5"
			resistance="13.5kohm"
			footprint="res0603"
			pcbX={-2}
			pcbY={-6}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={6.5}
			schY={-3}
			connections={{ pin1: "net.FB", pin2: "net.GND" }}
		/>
		<resistor
			name="R6"
			resistance="15kohm"
			footprint="res0603"
			pcbX={1}
			pcbY={-6}
			schSheetName="buck"
			schSectionName="buck_regulator"
			schX={6.5}
			schY={-4.5}
			connections={{ pin1: "net.FB", pin2: "net.PD_CTL2" }}
		/>

		{/* Firmware-free USB-C PD source controller and receptacle-safe power path. */}
		<TPS25740ARGER
			name="U2"
			pcbX={8.2}
			pcbY={0}
			pcbRotation={0}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-0.1}
			schY={0}
			connections={{
				VTX: "net.VTX",
				CC1: "net.CC1",
				CC2: "net.CC2",
				GND: "net.GND",
				HIPWR: "net.HIPWR_CFG",
				CTL2: "net.PD_CTL2",
				EN9V: "net.GND",
				NC1: "net.GND",
				NC2: "net.GND",
				PSEL: "net.GND",
				DVDD: "net.DVDD",
				PCTRL: "net.GND",
				GD: "net.VAUX",
				VAUX: "net.VAUX",
				VDD: "net.GND",
				AGND: "net.GND",
				ISNS: "net.ISNS",
				VPWR: "net.BUCK_OUT",
				VBUS: "net.VBUS",
				GDNG: "net.GDNG_RAW",
				GDNS: "net.FET_COMMON",
				DSCG: "net.DSCG",
				EP: "net.GND",
			}}
			noConnect={["CTL1", "UFP"]}
		/>
		<capacitor
			name="C8"
			capacitance="0.1uF"
			schOrientation="vertical"
			maxVoltageRating="16V"
			footprint="cap0603"
			pcbX={4.5}
			pcbY={8}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-5}
			schY={-4}
			connections={{ pin1: "net.VTX", pin2: "net.GND" }}
		/>
		<capacitor
			name="C9"
			capacitance="0.1uF"
			schOrientation="vertical"
			maxVoltageRating="16V"
			footprint="cap0603"
			pcbX={7.5}
			pcbY={8}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-3.5}
			schY={-4}
			connections={{ pin1: "net.VAUX", pin2: "net.GND" }}
		/>
		<capacitor
			name="C10"
			capacitance="0.22uF"
			schOrientation="vertical"
			maxVoltageRating="10V"
			footprint="cap0603"
			pcbX={10.5}
			pcbY={8}
			pcbRotation={180}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-2}
			schY={-4}
			connections={{ pin1: "net.DVDD", pin2: "net.GND" }}
		/>
		<capacitor
			name="C14"
			capacitance="0.1uF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap0603"
			pcbX={5}
			pcbY={-6}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-0.5}
			schY={-4}
			connections={{ pin1: "net.BUCK_OUT", pin2: "net.GND" }}
		/>
		<resistor
			name="R7"
			resistance="100kohm"
			footprint="res0603"
			pcbX={13.5}
			pcbY={10.5}
			pcbRotation={90}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-4}
			schY={3}
			connections={{ pin1: "net.DVDD", pin2: "net.HIPWR_CFG" }}
		/>
		<capacitor
			name="C11"
			capacitance="560pF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap0603"
			pcbX={15}
			pcbY={-8.5}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-5}
			schY={5}
			connections={{ pin1: "net.CC1", pin2: "net.GND" }}
		/>
		<capacitor
			name="C12"
			capacitance="560pF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap0603"
			pcbX={18.5}
			pcbY={-7}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={-3.5}
			schY={5}
			connections={{ pin1: "net.CC2", pin2: "net.GND" }}
		/>
		<CSD17579Q3A
			name="Q2"
			pcbX={13.5}
			pcbY={3.2}
			pcbRotation={0}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={4}
			schY={0}
			connections={{
				D1: "net.BUCK_OUT",
				D2: "net.BUCK_OUT",
				D3: "net.BUCK_OUT",
				D4: "net.BUCK_OUT",
				D5: "net.BUCK_OUT",
				S1: "net.FET_COMMON",
				S2: "net.FET_COMMON",
				S3: "net.FET_COMMON",
				G: "net.VBUS_GATE",
			}}
		/>
		<CSD17579Q3A
			name="Q3"
			pcbX={13.5}
			pcbY={-3.2}
			pcbRotation={180}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={7.1}
			schY={0}
			connections={{
				D1: "net.ISNS",
				D2: "net.ISNS",
				D3: "net.ISNS",
				D4: "net.ISNS",
				D5: "net.ISNS",
				S1: "net.FET_COMMON",
				S2: "net.FET_COMMON",
				S3: "net.FET_COMMON",
				G: "net.VBUS_GATE",
			}}
		/>
		<resistor
			name="R11"
			resistance="10ohm"
			footprint="res0603"
			pcbX={12.5}
			pcbY={6.25}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={3}
			schY={2.5}
			connections={{ pin1: "net.GDNG_RAW", pin2: "net.VBUS_GATE" }}
		/>
		<resistor
			name="R12"
			resistance="1kohm"
			footprint="res0603"
			pcbX={15.5}
			pcbY={6.25}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={4.5}
			schY={2.5}
			connections={{ pin1: "net.VBUS_GATE", pin2: "net.SLEW_NODE" }}
		/>
		<capacitor
			name="C15"
			capacitance="10nF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap0603"
			pcbX={18.5}
			pcbY={7}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={6}
			schY={2.5}
			connections={{ pin1: "net.SLEW_NODE", pin2: "net.FET_COMMON" }}
		/>
		<resistor
			name="R10"
			resistance="0.0064ohm"
			footprint="res2512"
			pcbX={17.7}
			pcbY={0}
			pcbRotation={90}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={9.2}
			schY={0}
			connections={{ pin1: "net.ISNS", pin2: "net.VBUS" }}
		/>
		<resistor
			name="R8"
			resistance="120ohm"
			footprint="res1206"
			pcbX={10.5}
			pcbY={-7.5}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={5}
			schY={-3}
			connections={{ pin1: "net.DSCG", pin2: "net.VBUS" }}
		/>
		<capacitor
			name="C13"
			capacitance="6.8uF"
			schOrientation="vertical"
			maxVoltageRating="25V"
			footprint="cap1210"
			pcbX={17.5}
			pcbY={-11}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={9.5}
			schY={-3}
			connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
		/>
		<diode
			name="D2"
			manufacturerPartNumber="B340A-13-F"
			footprint="sma"
			pcbX={22}
			pcbY={-9.5}
			pcbRotation={90}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={11}
			schY={-3}
			connections={{ cathode: "net.VBUS", anode: "net.GND" }}
		/>

		<TYPE_C_31_M_12
			name="J2"
			pcbX={25}
			pcbY={0}
			pcbRotation={90}
			schSheetName="pd"
			schSectionName="pd_source"
			schX={12}
			schY={0}
			connections={{
				VBUS1: "net.VBUS",
				VBUS2: "net.VBUS",
				CC1: "net.CC1",
				CC2: "net.CC2",
				GND1: "net.GND",
				GND2: "net.GND",
				SH1: "net.GND",
				SH2: "net.GND",
				SH3: "net.GND",
				SH4: "net.GND",
			}}
			noConnect={["DP1", "DN1", "DP2", "DN2", "SBU1", "SBU2"]}
		/>

		<silkscreentext text="GND" pcbX={-25.5} pcbY={6.7} fontSize="0.75mm" />
		<silkscreentext text="+12V" pcbX={-25.5} pcbY={-6.3} fontSize="0.75mm" />
		<silkscreentext text="J1" pcbX={-28.5} pcbY={0.2} fontSize="0.8mm" />
		<silkscreentext text="12V DC IN" pcbX={-23.5} pcbY={11.8} fontSize="0.9mm" />
		<silkscreentext text="USB-C PD OUT" pcbX={24} pcbY={11.8} fontSize="0.8mm" />
		<silkscreentext text="5V/3A  9V/2A" pcbX={4} pcbY={11.5} fontSize="0.8mm" />
	</board>
);

export default UsbCPd20WCharger;
