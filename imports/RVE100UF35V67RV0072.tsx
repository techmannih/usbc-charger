import type { CapacitorProps } from "@tscircuit/props"

export const RVE100UF35V67RV0072 = (props: Omit<CapacitorProps, "capacitance">) => {
  const { name = "C1", ...restProps } = props

  return (
    <capacitor
      name={name}
      capacitance="100uF"
      polarized
      supplierPartNumbers={{
  "jlcpcb": [
    "C2836437"
  ]
}}
      manufacturerPartNumber="RVE100UF35V67RV0072"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="2.669921mm" pcbY="0mm" width="3.499993mm" height="1.6999966mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.669921mm" pcbY="0mm" width="3.499993mm" height="1.6999966mm" shape="rect" />
<silkscreenpath route={[{"x":3.3752790000000914,"y":3.375660000000039},{"x":-1.979041000000052,"y":3.375660000000039},{"x":-3.3760410000001,"y":1.9812000000001717},{"x":-3.3760410000001,"y":1.1201399999999921}]} />
<silkscreenpath route={[{"x":3.3752790000000914,"y":-0.7800086000000874},{"x":3.3752790000000914,"y":-3.3755330000000185}]} />
<silkscreenpath route={[{"x":3.3752790000000914,"y":3.375660000000039},{"x":3.3752790000000914,"y":0.7802626000000146}]} />
<silkscreenpath route={[{"x":-3.3760410000001,"y":-0.7800086000000874},{"x":-3.3760410000001,"y":-1.981072999999924}]} />
<silkscreenpath route={[{"x":-3.3760410000001,"y":1.1201399999999921},{"x":-3.3760410000001,"y":0.7802626000000146}]} />
<silkscreenpath route={[{"x":3.375710799999979,"y":-3.3755330000000185},{"x":-1.981149200000118,"y":-3.3755330000000185},{"x":-3.3756091999999853,"y":-1.981072999999924}]} />
<silkscreentext text="{NAME}" pcbX="-0.002921mm" pcbY="4.3782mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-4.672521000000074,"y":3.6282000000001062},{"x":4.666678999999931,"y":3.6282000000001062},{"x":4.666678999999931,"y":-3.6281999999999925},{"x":-4.672521000000074,"y":-3.6281999999999925},{"x":-4.672521000000074,"y":3.6282000000001062}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2836437.obj?uuid=19c48a24e5bd44fea0d7364f22ddf990",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C2836437.step?uuid=19c48a24e5bd44fea0d7364f22ddf990",
        pcbRotationOffset: 180,
        modelOriginPosition: { x: 0, y: 0, z: -0.02 },
      }}
      {...restProps}
    />
  )
}