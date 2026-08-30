import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"]
} as const

export const PESD5V0H1BSF = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          {/* EasyEDA imports custom symbols as fixed geometry, so define this
              shunt clamp vertically: protected signal above, GND below. */}
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="up" schX={0} schY={0.4} schStemLength={0.2} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="down" schX={0} schY={-0.4} schStemLength={0.2} />
          <schematicpath svgPath="M -0.14 0.2 L 0 0 L 0.14 0.2 Z" strokeColor="#880000" />
          <schematicpath points={[
            { x: 0.14, y: -0.04 },
            { x: 0.08, y: 0 },
            { x: -0.08, y: 0 },
            { x: -0.14, y: 0.04 },
          ]} strokeColor="#880000" />
          <schematicpath svgPath="M 0.14 -0.2 L 0 0 L -0.14 -0.2 Z" strokeColor="#880000" />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C477989"
  ]
}}
      manufacturerPartNumber="PESD5V0H1BSF"
      footprint={<footprint>
        <smtpad portHints={["pin2"]} pcbX="0.225044mm" pcbY="0mm" width="0.2500122mm" height="0.350012mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-0.225044mm" pcbY="0mm" width="0.2500122mm" height="0.350012mm" shape="rect" />
<silkscreenpath route={[{"x":-0.39999920000002476,"y":0.24998679999998785},{"x":-0.4500118000000839,"y":0.24998679999998785}]} />
<silkscreenpath route={[{"x":-0.39999920000002476,"y":-0.250012199999901},{"x":-0.4499864000000571,"y":-0.250012199999901},{"x":-0.4500118000000839,"y":-0.24998679999998785}]} />
<silkscreenpath route={[{"x":0.45003719999988334,"y":-0.24998679999998785},{"x":0.4000245999999379,"y":-0.24998679999998785},{"x":0.39999919999991107,"y":-0.250012199999901}]} />
<silkscreenpath route={[{"x":0.39999919999991107,"y":0.24998679999998785},{"x":0.45003719999988334,"y":0.24998679999998785}]} />
<silkscreenpath route={[{"x":-0.4500118000000839,"y":0.2500122000000147},{"x":-0.4500118000000839,"y":-0.24998679999998785}]} />
<silkscreenpath route={[{"x":0.45003719999988334,"y":0.2500122000000147},{"x":0.45003719999988334,"y":0.018084799999996903},{"x":0.45003719999988334,"y":-0.24998679999998785}]} />
<silkscreenpath route={[{"x":-0.39999920000002476,"y":-0.250012199999901},{"x":0.39999919999991107,"y":-0.250012199999901}]} />
<silkscreenpath route={[{"x":-0.39999920000002476,"y":0.24998679999998785},{"x":0.39999919999991107,"y":0.24998679999998785}]} />
<silkscreentext text="{NAME}" pcbX="-0.0127mm" pcbY="1.254mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-0.7072000000000571,"y":0.5040000000000191},{"x":0.6817999999998392,"y":0.5040000000000191},{"x":0.6817999999998392,"y":-0.5039999999999054},{"x":-0.7072000000000571,"y":-0.5039999999999054},{"x":-0.7072000000000571,"y":0.5040000000000191}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C477989.obj?uuid=7c2a8f918eaa40f59db7d52d71a0e531",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C477989.step?uuid=7c2a8f918eaa40f59db7d52d71a0e531",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0, y: 0.000012699999956566899, z: -0.01 },
      }}
      {...props}
    />
  )
}
