# Pin and interface map

The complete map is generated at [`fabrication/PINMAP.csv`](fabrication/PINMAP.csv)
from the same circuit JSON used for the manufacturing review exports. It
includes aliases, physical pad coordinates, layer sets and intentional NCs.

## U2: standard IP6520

| Pin | Signal | Board net |
| --- | --- | --- |
| 1 | VOUT | VBUS_OUT |
| 2 | VIN | VIN_15V |
| 3 | SW | SW |
| 4 | BST | BST |
| 5 | DM | USB_DM |
| 6 | DP | USB_DP |
| 7 | CC1 | CC1 |
| 8 | CC2 | CC2 |
| 9 | Exposed pad / GND | GND |

## U1: isolated module

| Pin | Signal | Board net |
| --- | --- | --- |
| 1 | AC2 | AC_N_FILTERED |
| 2 | AC1 | AC_L_FILTERED |
| 3 | VNEG | GND |
| 4 | VPOS | VIN_15V |

## J2: USB-C connector

The import numbers 1–16 are footprint selectors, not USB Type-C contact names.
Use the aliases in PINMAP.csv: pin 6 = A5/CC1, pin 12 = B5/CC2;
pins 8/10 = A6/B6/D+, pins 9/7 = A7/B7/D−;
pins 15/16 = B4A9/A4B9/VBUS, pins 13/14 = A1B12/B1A12/GND.
Pins 1–4 are shield tabs. Pins 5/11 (B8/A8, SBU2/SBU1) are intentionally NC.

J1 pin 2 has the imported alias `GND` but belongs to **AC_N**. It is not
connected to the isolated low-voltage ground. TP1, TP2 and TP3 are respectively
VIN_15V, isolated GND and VBUS_OUT.
