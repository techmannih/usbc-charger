# USB-C PD 18W / 20W Smartphone Fast Charger Module

A compact **60 × 28 mm, regulated 12 V DC-to-USB-C Power Delivery (PD) source module** built with [tscircuit](https://tscircuit.com). 

This board steps down a 12 V DC input (from a 12 V power adapter, car battery, solar system, or bench power supply) to provide USB Power Delivery fast charging directly to smartphones and other USB-C powered devices.

---

## 📱 Fast Charging Capabilities & Compatibility

- **Supported Output Profiles:**
  - `5 V @ 3 A` (15 W) — Standard USB-C Fast Charging
  - `9 V @ 2 A` (18 W) — USB Power Delivery (PD) Fast Charging
- **Device Compatibility:**
  - **Apple iPhones:** iPhone 8, X, 11, 12, 13, 14, 15, and 16 series (via USB-C to USB-C or Type-C to Lightning cable).
  - **Android Devices:** Samsung Galaxy (S & A series), Google Pixel, OnePlus, Xiaomi, Nothing Phone, Motorola, and any phone supporting USB-PD.
  - **Tablets / Accessories:** iPad Air/Pro/Mini, wireless earbuds, smartwatches, power banks.
  - **Orientation-Independent:** CC1 and CC2 communication enables seamless fast charging in both cable orientations.

---

## 🔌 Connector Pinouts & Wiring Guide

| Connector | Reference | Type | Pin | Label | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **DC Power Input** | **J1** | 5.08 mm Screw Terminal (`WJ500V-5.08-2P`) | **Pin 1 (Top)** | `+12V` | Positive DC Input (10.5 V – 14.0 V DC, min 3 A) |
| | | | **Pin 2 (Bottom)** | `GND` | Power Supply Ground |
| **Fast Charging Port** | **J2** | 16-Pin / 12-Contact USB-C (`TYPE-C-31-M-12`) | **VBUS** | `VBUS` | Regulated 5 V / 9 V Power Output |
| | | | **CC1 / CC2** | `CC1 / CC2` | USB-PD Handshake & Cable Orientation |
| | | | **GND / Shield** | `GND` | Ground & ESD Chassis Ground |

> [!NOTE]
> This board is designed for **12 V DC power sources**. It is **not** a direct mains-voltage AC (220 V / 110 V) wall charger. For home wall socket use, connect an external 12 V DC adapter (2 A to 3 A rating).

---

## 📦 Complete Bill of Materials (BOM) & Imported Parts

### 1. Main Integrated Circuits & Semiconductors

| Ref | Part Number | JLCPCB / LCSC ID | Package | Purpose / Function |
| :--- | :--- | :--- | :--- | :--- |
| **U1** | `TPS54302DDCT` | **C129370** | SOT-23-6 | 3 A, 28 V Synchronous Step-Down (Buck) Converter |
| **U2** | `TPS25740ARGER` | **C544309** | VQFN-24 | Hardware-based USB-PD 2.0/3.0 Source Controller |
| **Q1** | `AO4407A` | **C2841482** | SOIC-8 | 30 V P-Channel MOSFET for Reverse-Polarity Protection |
| **Q2, Q3** | `CSD17579Q3A` | **C97376** | VSON-8 (3.3×3.3) | Back-to-Back N-Channel MOSFETs for VBUS Power Isolation |
| **D1** | `SMBJ15A` | **C70274** | SMB (DO-214AA) | 15 V Unidirectional TVS Diode for Input Surge Protection |
| **D2** | `B340A-13-F` | **C8598** | SMA (DO-214AC) | 3 A, 40 V Schottky Diode for VBUS Negative Transient Clamp |

### 2. Connectors & Inductors

| Ref | Part Number | JLCPCB / LCSC ID | Package | Purpose / Function |
| :--- | :--- | :--- | :--- | :--- |
| **J1** | `WJ500V-5.08-2P` | **C8465** | 5.08 mm Pitch 2P | 2-Pin Screw Terminal Block for DC Input |
| **J2** | `TYPE-C-31-M-12` | **C165948** | Hybrid SMT/THT | 16-Pin USB Type-C Receptacle |
| **L1** | `FXL0630-100-M` | **C167223** | 6.8 × 6.8 mm SMD | 10 µH, 4.5 A High-Current Buck Power Inductor |
| **F1** | 3 A, 30 V Fast Fuse | — | SMD 1206 | Input Overcurrent Protection |

### 3. Precision Resistors & Current Sense

| Ref | Value | Tolerance / Rating | Package | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **R1** | 100 kΩ | 1%, 1/10 W | 0603 | Q1 Gate pull-down resistor |
| **R2** | 511 kΩ | 1%, 1/10 W | 0603 | TPS54302 EN voltage divider (top) |
| **R3** | 105 kΩ | 1%, 1/10 W | 0603 | TPS54302 EN voltage divider (bottom) |
| **R4** | 100 kΩ | 0.5%, 1/10 W | 0603 | Buck feedback network divider (top) |
| **R5** | 13.5 kΩ | 0.5%, 1/10 W | 0603 | Buck feedback fixed resistor (sets 5.01 V default) |
| **R6** | 15 kΩ | 0.5%, 1/10 W | 0603 | Switched feedback resistor (switches to 8.99 V on 9 V PD) |
| **R7** | 100 kΩ | 1%, 1/10 W | 0603 | TPS25740A HIPWR configuration pull-up to DVDD |
| **R8** | 120 Ω | 1%, 0.5 W | 1206 | Fast VBUS discharge upon cable disconnect |
| **R10** | 6.4 mΩ (0.0064 Ω) | 1%, 1 W | 2512 | Precision Kelvin Current Sense Shunt for USB Overcurrent Protection |
| **R11** | 10 Ω | 1%, 1/10 W | 0603 | VBUS MOSFET gate drive damping resistor |
| **R12** | 1 kΩ | 1%, 1/10 W | 0603 | MOSFET turn-on slew-rate control resistor |

### 4. Capacitors

| Ref | Value | Voltage Rating | Package | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **C1** | 47 µF | 25 V X5R/X7R | 1210 | Main DC input bulk capacitor |
| **C2** | 10 µF | 25 V X7R | 1206 | Buck converter high-frequency input capacitor |
| **C3, C14** | 0.1 µF | 25 V X7R | 0603 | High-frequency input & output decoupling |
| **C4** | 0.1 µF | 25 V X7R | 0603 | TPS54302 BOOT-to-SW bootstrap capacitor |
| **C5, C6** | 22 µF | 16 V X7R | 1210 | Buck converter output filtering capacitors |
| **C7** | 75 pF | 25 V C0G/NP0 | 0603 | Buck feedback feedforward capacitor |
| **C8** | 0.1 µF | 16 V X7R | 0603 | TPS25740A VTX charge pump capacitor |
| **C9** | 0.1 µF | 16 V X7R | 0603 | TPS25740A VAUX / Gate Drive supply decoupling |
| **C10** | 0.22 µF | 10 V X7R | 0603 | TPS25740A DVDD (3.3 V LDO) bypass capacitor |
| **C11, C12** | 560 pF | 25 V C0G/NP0 | 0603 | CC1 and CC2 lines ESD / RF filtering |
| **C13** | 6.8 µF | 25 V X7R | 1210 | USB-C VBUS receptacle decoupling capacitor |
| **C15** | 10 nF | 25 V X7R | 0603 | VBUS switch gate slew-rate shaping capacitor |

---

## ⚙️ How the Circuit Works

1. **Input Protection:**
   - 12 V DC enters via `J1`. `F1` (3 A fuse) provides overcurrent safety.
   - `Q1` (P-MOSFET) ensures the circuit is unharmed if input polarity is accidentally reversed.
   - `D1` (TVS Diode) clamps voltage spikes and inductive surges.
2. **Synchronous Buck Conversion (TPS54302):**
   - High-efficiency synchronous rectification converts 12 V DC to 5 V or 9 V.
   - Fixed divider `R4` (100 kΩ) & `R5` (13.5 kΩ) sets a baseline output of **5.01 V**.
3. **USB-PD Autonomous Negotiation (TPS25740A):**
   - When a phone is connected to `J2`, `U2` detects the sink on `CC1`/`CC2` and advertises 5 V @ 3 A (15 W) and 9 V @ 2 A (18 W).
   - If the smartphone requests 9 V, `U2` pulls the `CTL2` pin to GND, placing `R6` (15 kΩ) in parallel with `R5`. This shifts the effective feedback resistance to 7.105 kΩ, boosting the buck output seamlessly to **8.99 V**.
4. **VBUS Power Path & Protection:**
   - Dual back-to-back MOSFETs (`Q2`, `Q3`) isolate `VBUS` until proper USB-PD negotiation is complete.
   - `R10` (6.4 mΩ) senses current for active hardware overcurrent protection (OCP).
   - Upon unplugging the phone, `U2` engages `R8` (120 Ω) to rapidly discharge `VBUS` back to 0 V within USB-PD timing specifications.

---

## 🛠️ Validation & Development Commands

Run standard verification and snapshot tests:

```sh
# Install dependencies
bun install

# Run TypeScript typecheck
bun run typecheck

# Check netlist & shorts
bunx tsci check netlist
bunx tsci check shorts index.circuit.tsx

# Build schematic and PCB outputs
bun run build

# Update 2D and 3D snapshots
bun run snapshot:update
bun run snapshot:3d:update
```
