import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["C", "K", "CATHODE"],
  pin2: ["A", "ANODE"]
} as const

export const SMBJ15A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.4} schY={0} schStemLength={0.3} />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.4} schY={0} schStemLength={0.3} />
          <schematicpath points={[{"x":-0.18,"y":0.18},{"x":-0.1,"y":0.1},{"x":-0.1,"y":-0.1},{"x":-0.02,"y":-0.18}]} strokeColor="#880000" />
          <schematicpath svgPath="M 0.1 -0.12 L -0.1 0 L 0.1 0.14 Z" strokeColor="#880000" />
          <schematicpath points={[{ x: -0.4, y: 0 }, { x: -0.18, y: 0 }]} strokeColor="#880000" />
          <schematicpath points={[{ x: 0.1, y: 0 }, { x: 0.4, y: 0 }]} strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C83846"
  ]
}}
      manufacturerPartNumber="SMBJ15A"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="2.360676mm" pcbY="0mm" width="2.047494mm" height="2.192401mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-2.360676mm" pcbY="0mm" width="2.047494mm" height="2.192401mm" shape="rect" />
<silkscreenpath route={[{"x":-1.0160000000000764,"y":1.8862040000000206},{"x":-1.0160000000000764,"y":-1.886203999999907}]} />
<silkscreenpath route={[{"x":-2.7437080000000833,"y":1.8862040000000206},{"x":2.7437079999999696,"y":1.8862040000000206}]} />
<silkscreenpath route={[{"x":-2.7437080000000833,"y":-1.886203999999907},{"x":2.7437079999999696,"y":-1.886203999999907}]} />
<silkscreenpath route={[{"x":2.7437079999999696,"y":1.8862040000000206},{"x":2.7437079999999696,"y":1.2993877999999768}]} />
<silkscreenpath route={[{"x":2.7437079999999696,"y":-1.886203999999907},{"x":2.7437079999999696,"y":-1.2993877999999768}]} />
<silkscreentext text="{NAME}" pcbX="0mm" pcbY="2.9558mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.6282000000001062,"y":2.2058000000000675},{"x":3.628199999999879,"y":2.2058000000000675},{"x":3.628199999999879,"y":-2.231200000000058},{"x":-3.6282000000001062,"y":-2.231200000000058},{"x":-3.6282000000001062,"y":2.2058000000000675}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C83846.obj?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C83846.step?uuid=892cc756ed79448ab4afad0e5bfcdfa6",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0, z: -0.1 },
      }}
      {...props}
    />
  )
}
