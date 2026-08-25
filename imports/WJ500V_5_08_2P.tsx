import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VIN_POS", "L", "LINE"],
  pin2: ["GND", "N", "NEUTRAL"],
} as const

export const WJ500V_5_08_2P = (props: ChipProps<typeof pinLabels>) => {
  return (
    <connector
      pinLabels={pinLabels}
      schPinArrangement={{
        leftSide: { direction: "top-to-bottom", pins: ["L", "N"] },
      }}
      supplierPartNumbers={{
        jlcpcb: ["C8465"],
      }}
      manufacturerPartNumber="WJ500V-5.08-2P"
      footprint={
        <footprint insertionDirection="from_top">
          <platedhole portHints={["pin2"]} pcbX="2.54mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.3000228mm" shape="circle" />
          <platedhole portHints={["pin1"]} pcbX="-2.54mm" pcbY="0mm" outerDiameter="1.999996mm" holeDiameter="1.3000228mm" shape="circle" />
          <silkscreenpath route={[{ x: 5.08, y: 5.63753 }, { x: -5.053838, y: 5.63753 }]} />
          <silkscreenpath route={[{ x: -5.6799988, y: -3.7500052 }, { x: -5.08, y: -3.4999676 }]} />
          <silkscreenpath route={[{ x: -5.6799988, y: -2.7500072 }, { x: -5.6799988, y: -3.7500052 }]} />
          <silkscreenpath route={[{ x: -5.08, y: -3.0000702 }, { x: -5.6799988, y: -2.7500072 }]} />
          <silkscreenpath route={[{ x: -5.08, y: 4.5000164 }, { x: -5.6799988, y: 4.7500032 }, { x: -5.6799988, y: 3.7499798 }, { x: -5.08, y: 3.9998904 }]} />
          <silkscreenpath route={[{ x: 5.08, y: -4.52247 }, { x: -5.053838, y: -4.52247 }]} />
          <silkscreenpath route={[{ x: 5.08, y: -4.52247 }, { x: 5.08, y: 5.63753 }]} />
          <silkscreenpath route={[{ x: -5.08, y: -4.51993 }, { x: -5.08, y: 5.64007 }]} />
          <courtyardoutline outline={[{ x: -5.9396, y: 5.8888 }, { x: 5.457, y: 5.8888 }, { x: 5.457, y: -4.7712 }, { x: -5.9396, y: -4.7712 }, { x: -5.9396, y: 5.8888 }]} />
        </footprint>
      }
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8465.obj?uuid=d60ef5d423934d3393dc75fa0a07b6bd",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C8465.step?uuid=d60ef5d423934d3393dc75fa0a07b6bd",
        pcbRotationOffset: 0,
        modelOriginPosition: {
          x: -2.5399878999999967,
          y: 0,
          z: -0.000006999999999646178,
        },
      }}
      {...props}
    />
  )
}
