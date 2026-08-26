import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const MOV_14D471K = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematicpath points={[{"x":0.2,"y":0.12},{"x":0.12,"y":0.12}]} strokeColor="#880000" />
          <schematicrect schX={0} schY={0} width={0.4} height={0.16} color="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.12},{"x":-0.12,"y":-0.12}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.12,"y":0.12},{"x":-0.12,"y":-0.12}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.4} schY={0} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.4} schY={0} schStemLength={0.2} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C1527439"
  ]
}}
      manufacturerPartNumber="MOV-14D471K"
      footprint={<footprint>
        <platedhole  portHints={["pin1"]} pcbX="-3.750056mm" pcbY="1.199896mm" outerDiameter="1.7999964mm" holeDiameter="1.199896mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="3.750056mm" pcbY="-1.199896mm" outerDiameter="1.7999964mm" holeDiameter="1.199896mm" shape="circle" />
<silkscreenpath route={[{"x":-8.29995800000006,"y":2.699994600000082},{"x":8.29995800000006,"y":2.699994600000082}]} />
<silkscreenpath route={[{"x":8.29995800000006,"y":2.699994600000082},{"x":8.29995800000006,"y":-2.699994599999968}]} />
<silkscreenpath route={[{"x":8.29995800000006,"y":-2.699994599999968},{"x":-8.29995800000006,"y":-2.699994599999968}]} />
<silkscreenpath route={[{"x":-8.29995800000006,"y":-2.699994599999968},{"x":-8.29995800000006,"y":2.699994600000082}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="3.7178mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-8.55580000000009,"y":2.967800000000011},{"x":8.55580000000009,"y":2.967800000000011},{"x":8.55580000000009,"y":-2.967800000000125},{"x":-8.55580000000009,"y":-2.967800000000125},{"x":-8.55580000000009,"y":2.967800000000011}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1527439.obj?uuid=4fde5b87db414f8a9aff6ac2ffee6467",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C1527439.step?uuid=4fde5b87db414f8a9aff6ac2ffee6467",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012700000070253736, y: 0, z: -11.50001 },
      }}
      {...props}
    />
  )
}