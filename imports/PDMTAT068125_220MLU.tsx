import type { InductorProps } from "@tscircuit/props"

export const PDMTAT068125_220MLU = (props: Omit<InductorProps, "inductance">) => {
  return (
    <inductor
      inductance="22uH"
      supplierPartNumbers={{
  "jlcpcb": [
    "C3011539"
  ]
}}
      manufacturerPartNumber="PDMTAT068125-220MLU"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="0mm" pcbY="-4.499991mm" outerDiameter="2.2999954mm" holeDiameter="1.5000224mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="0mm" pcbY="4.499991mm" outerDiameter="2.2999954mm" holeDiameter="1.5000224mm" shape="circle" />
<silkscreenpath route={[{"x":11.499976999999944,"y":6.000115000000051},{"x":11.499976999999944,"y":-5.99986100000001}]} />
<silkscreenpath route={[{"x":-11.499951600000031,"y":6.000115000000051},{"x":-11.499951600000031,"y":-5.99986100000001}]} />
<silkscreenpath route={[{"x":-11.499951600000031,"y":-5.99986100000001},{"x":11.499976999999944,"y":-5.99986100000001}]} />
<silkscreenpath route={[{"x":-11.499951600000031,"y":6.000115000000051},{"x":11.499976999999944,"y":6.000115000000051}]} />
<silkscreentext text="{NAME}" pcbX="0.0127mm" pcbY="6.994527mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-11.756200000000035,"y":6.244527000000062},{"x":11.781599999999798,"y":6.244527000000062},{"x":11.781599999999798,"y":-6.295073000000002},{"x":-11.756200000000035,"y":-6.295073000000002},{"x":-11.756200000000035,"y":6.244527000000062}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3011539.obj?uuid=02c14d39c518497799d237459b0c35ad",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C3011539.step?uuid=02c14d39c518497799d237459b0c35ad",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: -0.00013970000009067007, y: 0, z: -12.800009 },
      }}
      {...props}
    />
  )
}