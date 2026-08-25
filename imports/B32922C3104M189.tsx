import type { CapacitorProps } from "@tscircuit/props"

export const B32922C3104M189 = (props: Omit<CapacitorProps, "capacitance">) => {
  const { name = "C1", ...restProps } = props

  return (
    <capacitor
      name={name}
      capacitance="100nF"
      symbol={
        <symbol>
          <schematicpath points={[{"x":0.16,"y":-0.04},{"x":-0.16,"y":-0.04}]} strokeColor="#A00000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="down" schX={0} schY={-0.4} schStemLength={0.2} />
          <schematicpath points={[{"x":0,"y":0.2},{"x":0,"y":0.04}]} strokeColor="#A00000" />
          <schematicpath points={[{"x":-0.16,"y":0.04},{"x":0.16,"y":0.04}]} strokeColor="#A00000" />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="up" schX={0} schY={0.4} schStemLength={0.2} />
          <schematicpath points={[{"x":0,"y":-0.04},{"x":0,"y":-0.2}]} strokeColor="#A00000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C125429"
  ]
}}
      manufacturerPartNumber="B32922C3104M189"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-7.500112mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.199896mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="7.500112mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.199896mm" shape="circle" />
<silkscreenpath route={[{"x":-8.999982000000003,"y":2.4998680000000064},{"x":8.999981999999989,"y":2.4998680000000064}]} />
<silkscreenpath route={[{"x":8.999981999999989,"y":2.4998680000000064},{"x":8.999981999999989,"y":-2.5001220000000046}]} />
<silkscreenpath route={[{"x":8.999981999999989,"y":-2.5001220000000046},{"x":-8.999982000000003,"y":-2.5001220000000046}]} />
<silkscreenpath route={[{"x":-8.999982000000003,"y":-2.5001220000000046},{"x":-8.999982000000003,"y":2.4998680000000064}]} />
<silkscreentext text="{NAME}" pcbX="-0.0254mm" pcbY="3.4892mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-9.292400000000015,"y":2.739200000000011},{"x":9.241599999999991,"y":2.739200000000011},{"x":9.241599999999991,"y":-2.789999999999992},{"x":-9.292400000000015,"y":-2.789999999999992},{"x":-9.292400000000015,"y":2.739200000000011}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C125429.obj?uuid=ed25d0f4be084c11bb40719f7b591085",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C125429.step?uuid=ed25d0f4be084c11bb40719f7b591085",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 2.499999999999986, z: -5.500007 },
      }}
      {...restProps}
    />
  )
}