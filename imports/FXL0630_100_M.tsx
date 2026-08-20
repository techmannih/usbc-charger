import type { InductorProps } from "@tscircuit/props"

export const FXL0630_100_M = (props: Omit<InductorProps, "inductance">) => {
  return (
    <inductor
      inductance="10uH"
      supplierPartNumbers={{
  "jlcpcb": [
    "C167223"
  ]
}}
      manufacturerPartNumber="FXL0630-100-M"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="2.999994mm" pcbY="0mm" width="2.350008mm" height="3.499993mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.999994mm" pcbY="0mm" width="2.350008mm" height="3.499993mm" shape="rect" />
<silkscreenpath route={[{"x":3.4999930000000177,"y":3.300018800000089},{"x":3.4999930000000177,"y":1.9999452000000701}]} />
<silkscreenpath route={[{"x":-3.4997644000000037,"y":3.300018800000089},{"x":-3.4997644000000037,"y":1.99999600000001}]} />
<silkscreenpath route={[{"x":-3.4997644000000037,"y":3.300018800000089},{"x":3.4999930000000177,"y":3.300018800000089}]} />
<silkscreenpath route={[{"x":-3.4999930000000177,"y":-3.3000187999999753},{"x":3.4999930000000177,"y":-3.3000187999999753}]} />
<silkscreenpath route={[{"x":-3.4997644000000037,"y":-1.99999600000001},{"x":-3.4997644000000037,"y":-3.3000187999999753}]} />
<silkscreenpath route={[{"x":3.4999930000000177,"y":-1.9999451999998428},{"x":3.4999930000000177,"y":-3.3000187999999753}]} />
<silkscreentext text="{NAME}" pcbX="-0.00508mm" pcbY="4.4036mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.4333800000000565,"y":3.653599999999983},{"x":4.423220000000015,"y":3.653599999999983},{"x":4.423220000000015,"y":-3.6789999999999736},{"x":-4.4333800000000565,"y":-3.6789999999999736},{"x":-4.4333800000000565,"y":3.653599999999983}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C167223.obj?uuid=4648ca2a175a4c44b6e2481d027b126e",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C167223.step?uuid=4648ca2a175a4c44b6e2481d027b126e",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -1.55 },
      }}
      {...props}
    />
  )
}