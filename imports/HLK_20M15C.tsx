import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["AC2", "AC_N", "N"],
  pin2: ["AC1", "AC_L", "L"],
  pin3: ["VNEG", "GND"],
  pin4: ["VPOS", "VOUT_15V"]
} as const

const pinAttributes = {
  pin2: { requiresPower: true },
  pin3: { requiresGround: true },
} as const

export const HLK_20M15C = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C52746093"
  ]
}}
      manufacturerPartNumber="HLK-20M15C"
      footprint={<footprint>
        <platedhole  portHints={["pin4"]} pcbX="25.500076mm" pcbY="-13.5001mm" outerDiameter="1.8999962mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="25.500076mm" pcbY="13.5001mm" outerDiameter="1.8999962mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="-25.500076mm" pcbY="-4.500118mm" outerDiameter="1.8999962mm" holeDiameter="1.1999976mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-25.500076mm" pcbY="4.499864mm" outerDiameter="1.8999962mm" holeDiameter="1.1999976mm" shape="circle" />
<silkscreenpath route={[{"x":-28.749980599999958,"y":-16.74995380000007},{"x":28.74995519999993,"y":-16.749928400000044}]} />
<silkscreenpath route={[{"x":-28.749980599999958,"y":16.749979199999984},{"x":-28.749980599999958,"y":-16.74995380000007}]} />
<silkscreenpath route={[{"x":-28.749980599999958,"y":16.749979199999984},{"x":28.74995519999993,"y":16.750004600000125}]} />
<silkscreenpath route={[{"x":28.74995519999993,"y":16.750004600000125},{"x":28.74995519999993,"y":-16.749928400000044}]} />
<silkscreentext text="{NAME}" pcbX="-0.021844mm" pcbY="17.787368mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-29.037343999999962,"y":17.037368000000015},{"x":28.993655999999874,"y":17.037368000000015},{"x":28.993655999999874,"y":-17.016031999999996},{"x":-29.037343999999962,"y":-17.016031999999996},{"x":-29.037343999999962,"y":17.037368000000015}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C52746093.obj?uuid=265fbf68364149a3b69fa0653322081c",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C52746093.step?uuid=265fbf68364149a3b69fa0653322081c",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.004998999999999754, y: 0.000012700000070253736, z: -0.000010000000000509601 },
      }}
      {...props}
    />
  )
}
