import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["GND"],
  pin2: ["SW"],
  pin3: ["VIN"],
  pin4: ["FB"],
  pin5: ["EN"],
  pin6: ["BOOT"]
} as const

const pinAttributes = {
  pin1: {requiresGround: true},
  pin3: {requiresPower: true}
} as const

export const TPS54302DDCT = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    "C129370"
  ]
}}
      manufacturerPartNumber="TPS54302DDCT"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="1.200023mm" pcbY="-0.94996mm" width="0.7999984mm" height="0.532003mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="1.200023mm" pcbY="0mm" width="0.7999984mm" height="0.532003mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="1.200023mm" pcbY="0.94996mm" width="0.7999984mm" height="0.532003mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.200023mm" pcbY="0.94996mm" width="0.7999984mm" height="0.532003mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.200023mm" pcbY="0mm" width="0.7999984mm" height="0.532003mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.200023mm" pcbY="-0.94996mm" width="0.7999984mm" height="0.532003mm" shape="rect" />
<silkscreenpath route={[{"x":0.8760714000001144,"y":1.5262098000000606},{"x":-0.8763253999999279,"y":1.5262098000000606}]} />
<silkscreenpath route={[{"x":0.8760714000001144,"y":-1.5262097999999469},{"x":-0.8763253999999279,"y":-1.5262097999999469}]} />
<silkscreenpath route={[{"x":1.4375130000000809,"y":-1.6685260000000426},{"x":1.4323979894876402,"y":-1.7073783621365237},{"x":1.417401537463661,"y":-1.7435829999999441},{"x":1.3935456273510454,"y":-1.7746726273510376},{"x":1.3624560000001793,"y":-1.7985285374636533},{"x":1.3262513621366452,"y":-1.813524989487405},{"x":1.2873990000000504,"y":-1.8186399999999594},{"x":1.2485466378635692,"y":-1.813524989487405},{"x":1.2123420000000351,"y":-1.7985285374636533},{"x":1.1812523726489417,"y":-1.7746726273510376},{"x":1.157396462536326,"y":-1.7435829999999441},{"x":1.1424000105125742,"y":-1.7073783621365237},{"x":1.1372850000001336,"y":-1.6685260000000426},{"x":1.1424000105125742,"y":-1.629673637863334},{"x":1.157396462536326,"y":-1.5934689999999136},{"x":1.1812523726489417,"y":-1.562379372648934},{"x":1.2123420000000351,"y":-1.5385234625363182},{"x":1.2485466378635692,"y":-1.5235270105124528},{"x":1.2873990000000504,"y":-1.5184119999998984},{"x":1.3262513621366452,"y":-1.5235270105124528},{"x":1.3624560000001793,"y":-1.5385234625363182},{"x":1.3935456273510454,"y":-1.562379372648934},{"x":1.417401537463661,"y":-1.5934689999999136},{"x":1.4323979894876402,"y":-1.629673637863334},{"x":1.4375130000000809,"y":-1.6685260000000426}]} />
<silkscreentext text="{NAME}" pcbX="0.101473mm" pcbY="2.524mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.850326999999993,"y":1.774000000000001},{"x":2.053273000000104,"y":1.774000000000001},{"x":2.053273000000104,"y":-2.0787999999998874},{"x":-1.850326999999993,"y":-2.0787999999998874},{"x":-1.850326999999993,"y":1.774000000000001}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C129370.obj?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C129370.step?uuid=222e8593009c495bb3d3af0c08fa5e6a",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: -0.0001269999999067295, y: -0.000012699999956566899, z: 0.050795 },
      }}
      {...props}
    />
  )
}