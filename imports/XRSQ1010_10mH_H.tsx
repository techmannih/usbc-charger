import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["pin1"],
  pin2: ["pin2"],
  pin3: ["pin3"],
  pin4: ["pin4"]
} as const

export const XRSQ1010_10mH_H = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      symbol={
        <symbol>
          <schematictext text="{NAME}" schX={0} schY={0.7} fontSize={0.18} anchor="center" color="#006464" />
          <schematicpath svgPath="M -0.20004 0.44006 A 0.078 0.08 0 1 0 -0.20012 0.28076" strokeColor="#880000" />
          <schematicpath svgPath="M -0.19998 0.2704 A 0.078 0.08 0 1 0 -0.20008 0.1111" strokeColor="#880000" />
          <schematicpath svgPath="M -0.19998 0.10106 A 0.078 0.08 0 1 0 -0.20008 -0.05824" strokeColor="#880000" />
          <schematicpath svgPath="M -0.20002 -0.0716 A 0.078 0.08 0 1 0 -0.20012 -0.2309" strokeColor="#880000" />
          <schematicpath svgPath="M 0.20004 -0.22006 A 0.078 0.08 0 1 0 0.20012 -0.06076" strokeColor="#880000" />
          <schematicpath svgPath="M 0.19998 -0.0504 A 0.078 0.08 0 1 0 0.20008 0.1089" strokeColor="#880000" />
          <schematicpath svgPath="M 0.19998 0.11894 A 0.078 0.08 0 1 0 0.20008 0.27824" strokeColor="#880000" />
          <schematicpath svgPath="M 0.20002 0.2916 A 0.078 0.08 0 1 0 0.20012 0.4509" strokeColor="#880000" />
          <schematiccircle center={{ x: -0.3, y: 0.4 }} radius={0.03} color="#880000" isFilled fillColor="#880000" />
          <schematiccircle center={{ x: 0.3, y: 0.4 }} radius={0.03} color="#880000" isFilled fillColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":0.46},{"x":0.2,"y":0.5}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":0.44},{"x":-0.2,"y":0.5}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.2,"y":-0.3},{"x":-0.2,"y":-0.24}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.2,"y":-0.3},{"x":0.2,"y":-0.22}]} strokeColor="#880000" />
          <schematicpath points={[{"x":-0.06,"y":0.5},{"x":-0.06,"y":-0.3}]} strokeColor="#880000" />
          <schematicpath points={[{"x":0.06,"y":0.5},{"x":0.06,"y":-0.3}]} strokeColor="#880000" />
          <port name="pin1" pinNumber={1} aliases={["1"]} direction="left" schX={-0.6} schY={0.5} schStemLength={0.4} />
          <port name="pin2" pinNumber={2} aliases={["2"]} direction="right" schX={0.6} schY={0.5} schStemLength={0.4} />
          <port name="pin3" pinNumber={3} aliases={["3"]} direction="right" schX={0.6} schY={-0.3} schStemLength={0.4} />
          <port name="pin4" pinNumber={4} aliases={["4"]} direction="left" schX={-0.6} schY={-0.3} schStemLength={0.4} />
        </symbol>
      }
      supplierPartNumbers={{
  "jlcpcb": [
    "C5380257"
  ]
}}
      manufacturerPartNumber="XRSQ1010-10mH-H"
      footprint={<footprint>
        <platedhole  portHints={["pin4"]} pcbX="-3.936492mm" pcbY="-3.563366mm" outerDiameter="1.524mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin1"]} pcbX="-3.936492mm" pcbY="3.43662mm" outerDiameter="1.524mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin3"]} pcbX="4.063492mm" pcbY="-3.563366mm" outerDiameter="1.524mm" holeDiameter="0.999998mm" shape="circle" />
<platedhole  portHints={["pin2"]} pcbX="4.063492mm" pcbY="3.43662mm" outerDiameter="1.524mm" holeDiameter="0.999998mm" shape="circle" />
<silkscreenpath route={[{"x":-0.9525000000001,"y":-1.0793729999999186},{"x":-6.921500000000151,"y":-1.0793729999999186}]} />
<silkscreenpath route={[{"x":-0.9525000000001,"y":-0.06337299999995594},{"x":-7.048500000000104,"y":-0.06337299999995594}]} />
<silkscreenpath route={[{"x":-0.9525000000001,"y":-2.095372999999995},{"x":-6.921500000000151,"y":-2.095372999999995}]} />
<silkscreenpath route={[{"x":-0.9525000000001,"y":0.9526270000000068},{"x":-6.921500000000151,"y":0.9526270000000068}]} />
<silkscreenpath route={[{"x":-0.9525000000001,"y":1.9686270000000832},{"x":-6.921500000000151,"y":1.9686270000000832}]} />
<silkscreenpath route={[{"x":1.0794999999998254,"y":-2.095372999999995},{"x":7.048499999999876,"y":-2.095372999999995}]} />
<silkscreenpath route={[{"x":1.0794999999998254,"y":-1.0793729999999186},{"x":7.048499999999876,"y":-1.0793729999999186}]} />
<silkscreenpath route={[{"x":7.048499999999876,"y":-0.06337299999995594},{"x":6.7944999999997435,"y":-0.06337299999995594}]} />
<silkscreenpath route={[{"x":1.0794999999998254,"y":-0.06337299999995594},{"x":6.7944999999997435,"y":-0.06337299999995594}]} />
<silkscreenpath route={[{"x":1.0794999999998254,"y":0.9526270000000068},{"x":6.921499999999924,"y":0.9526270000000068}]} />
<silkscreenpath route={[{"x":1.0794999999998254,"y":1.9686270000000832},{"x":7.048499999999876,"y":1.9686270000000832}]} />
<silkscreentext text="{NAME}" pcbX="0.000508mm" pcbY="7.02742mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-7.310692000000245,"y":6.277420000000006},{"x":7.311707999999726,"y":6.277420000000006},{"x":7.311707999999726,"y":-6.338380000000029},{"x":-7.310692000000245,"y":-6.338380000000029},{"x":-7.310692000000245,"y":6.277420000000006}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5380257.obj?uuid=2df5dbc5128944e4933e737dce3649e5",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C5380257.step?uuid=2df5dbc5128944e4933e737dce3649e5",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.06349999999974898, y: 0.05838569999991261, z: -1.400007 },
      }}
      {...props}
    />
  )
}
