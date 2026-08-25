import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const MF72_5D9 = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicrect schX={0} schY={0} width={0.6} height={0.2} color="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.6} schY={0} schStemLength={0.3} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.6} schY={0} schStemLength={0.3} />
          <schematicpath points={[{"x":0.25,"y":0.25},{"x":-0.19,"y":-0.19},{"x":-0.29,"y":-0.19}]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C11277"
  ]
}}
      manufacturerPartNumber="MF72 5D9"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.74904mm" pcbY="2.750058mm" outerDiameter="1.999996mm" holeDiameter="1.199896mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="3.74904mm" pcbY="-2.750058mm" outerDiameter="1.999996mm" holeDiameter="1.199896mm" shape="circle" />
<silkscreenpath route={[{"x":-5.499862000000007,"y":2.750058000000081},{"x":-5.499862000000007,"y":-2.750058000000081}]} />
<silkscreenpath route={[{"x":5.5001159999999345,"y":-2.750058000000081},{"x":5.5001159999999345,"y":2.750058000000081}]} />
<silkscreenpath route={[{"x":-3.810000000000059,"y":0},{"x":3.8099999999999454,"y":0}]} />
<silkscreenpath route={[{"x":-3.3020000000001346,"y":-1.524000000000001},{"x":-0.7620000000000573,"y":-1.524000000000001},{"x":3.048000000000002,"y":2.2859999999999445}]} />
<silkscreenpath route={[{"x":-5.499862000000007,"y":2.750058000000081},{"x":-4.9801780000000235,"y":2.750058000000081}]} />
<silkscreenpath route={[{"x":-2.517902000000049,"y":2.750058000000081},{"x":5.5001159999999345,"y":2.750058000000081}]} />
<silkscreenpath route={[{"x":5.5001159999999345,"y":-2.750058000000081},{"x":4.98017799999991,"y":-2.750058000000081}]} />
<silkscreenpath route={[{"x":2.5179019999999355,"y":-2.750058000000081},{"x":-5.499862000000007,"y":-2.750058000000081}]} />
<silkscreentext text="{NAME}" pcbX="-0.0254mm" pcbY="4.81mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-5.787199999999984,"y":4.059999999999945},{"x":5.736400000000003,"y":4.059999999999945},{"x":5.736400000000003,"y":-4.034599999999955},{"x":-5.787199999999984,"y":-4.034599999999955},{"x":-5.787199999999984,"y":4.059999999999945}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C11277.obj?uuid=6c7b3dd4317343d7813f79fe1474ccb5",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C11277.step?uuid=6c7b3dd4317343d7813f79fe1474ccb5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.000030499999999822336, y: 0.000012700000070253736, z: -13.50001 },
      }}
      {...props}
    />
  )
}