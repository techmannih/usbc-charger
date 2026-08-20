import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VTX"],
  pin2: ["CC1"],
  pin3: ["CC2"],
  pin4: ["GND"],
  pin5: ["HIPWR"],
  pin6: ["CTL1"],
  pin7: ["CTL2"],
  pin8: ["EN9V"],
  pin9: ["NC1"],
  pin10: ["NC2"],
  pin11: ["UFP"],
  pin12: ["PSEL"],
  pin13: ["DVDD"],
  pin14: ["PCTRL"],
  pin15: ["GD"],
  pin16: ["VAUX"],
  pin17: ["VDD"],
  pin18: ["AGND"],
  pin19: ["ISNS"],
  pin20: ["VPWR"],
  pin21: ["VBUS"],
  pin22: ["GDNG"],
  pin23: ["GDNS"],
  pin24: ["DSCG"],
  pin25: ["EP"]
} as const

const pinAttributes = {
  pin4: {requiresGround: true},
  pin13: {providesPower: true},
  pin18: {requiresGround: true},
  pin20: {requiresPower: true}
} as const

export const TPS25740ARGER = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      schHeight={2.6}
      supplierPartNumbers={{
  "jlcpcb": [
    "C544309"
  ]
}}
      manufacturerPartNumber="TPS25740ARGER"
      footprint={<footprint>
        <smtpad portHints={["pin25"]} pcbX="0.00023495mm" pcbY="-0.000889mm" width="2.70002mm" height="2.70002mm" shape="rect" />
<smtpad portHints={["pin24"]} pcbX="-1.24893705mm" pcbY="1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin23"]} pcbX="-0.74906505mm" pcbY="1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin22"]} pcbX="-0.24893905mm" pcbY="1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin21"]} pcbX="0.25093295mm" pcbY="1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin20"]} pcbX="0.75105895mm" pcbY="1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin19"]} pcbX="1.25093095mm" pcbY="1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin18"]} pcbX="1.91387095mm" pcbY="1.250061mm" width="0.580009mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin17"]} pcbX="1.91412495mm" pcbY="0.749935mm" width="0.580009mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin16"]} pcbX="1.91412495mm" pcbY="0.250063mm" width="0.580009mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin15"]} pcbX="1.91412495mm" pcbY="-0.250063mm" width="0.580009mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin14"]} pcbX="1.91412495mm" pcbY="-0.749935mm" width="0.580009mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin13"]} pcbX="1.91412495mm" pcbY="-1.250061mm" width="0.580009mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin12"]} pcbX="1.25093095mm" pcbY="-1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin11"]} pcbX="0.75105895mm" pcbY="-1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin10"]} pcbX="0.25093295mm" pcbY="-1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="-0.24893905mm" pcbY="-1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.74906505mm" pcbY="-1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-1.24893705mm" pcbY="-1.913001mm" width="0.2400046mm" height="0.580009mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="-1.91187705mm" pcbY="-1.250061mm" width="0.5839968mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="-1.91187705mm" pcbY="-0.749935mm" width="0.5839968mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="-1.91187705mm" pcbY="-0.250063mm" width="0.5839968mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="-1.91187705mm" pcbY="0.250063mm" width="0.5839968mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-1.91187705mm" pcbY="0.749935mm" width="0.5839968mm" height="0.2400046mm" shape="rect" />
<smtpad portHints={["pin1"]} pcbX="-1.91213105mm" pcbY="1.250061mm" width="0.5839968mm" height="0.2400046mm" shape="rect" />
<silkscreenpath route={[{"x":-2.1032914499998014,"y":1.7000728000000436},{"x":-2.1032914499998014,"y":2.1000466000000415},{"x":-1.698974249999992,"y":2.099970399999961}]} />
<silkscreenpath route={[{"x":1.6966755500001227,"y":2.1000466000000415},{"x":2.0966493500001206,"y":2.1000466000000415},{"x":2.0966493500001206,"y":1.7000728000000436}]} />
<silkscreenpath route={[{"x":2.1009927500001595,"y":-1.6000222000000122},{"x":2.1009927500001595,"y":-2.1000212000001284},{"x":1.7010189500000479,"y":-2.1000212000001284}]} />
<silkscreenpath route={[{"x":-2.09899884999993,"y":-1.6999712000001637},{"x":-2.09899884999993,"y":-2.1000212000001284},{"x":-1.698974249999992,"y":-2.1000212000001284}]} />
<silkscreenpath route={[{"x":-2.5450990499998625,"y":1.2698729999999614},{"x":-2.5492187538983444,"y":1.238580742170825},{"x":-2.5612971145806114,"y":1.2094210000000203},{"x":-2.580511011727367,"y":1.18438096172747},{"x":-2.6055510499999173,"y":1.165167064580828},{"x":-2.6347107921709494,"y":1.1530887038983337},{"x":-2.666003049999972,"y":1.1489689999999655},{"x":-2.697295307828881,"y":1.1530887038983337},{"x":-2.7264550499997995,"y":1.165167064580828},{"x":-2.7514950882724634,"y":1.18438096172747},{"x":-2.7707089854191054,"y":1.2094210000000203},{"x":-2.782787346101486,"y":1.238580742170825},{"x":-2.786907049999968,"y":1.2698729999999614},{"x":-2.782787346101486,"y":1.301165257828984},{"x":-2.7707089854191054,"y":1.3303249999999025},{"x":-2.7514950882724634,"y":1.3553650382725664},{"x":-2.7264550499997995,"y":1.3745789354190947},{"x":-2.697295307828881,"y":1.386657296101589},{"x":-2.666003049999972,"y":1.390777000000071},{"x":-2.6347107921709494,"y":1.386657296101589},{"x":-2.6055510499999173,"y":1.3745789354190947},{"x":-2.580511011727367,"y":1.3553650382725664},{"x":-2.5612971145806114,"y":1.3303249999999025},{"x":-2.5492187538983444,"y":1.301165257828984},{"x":-2.5450990499998625,"y":1.2698729999999614}]} />
<silkscreentext text="{NAME}" pcbX="-0.29186505mm" pcbY="3.208911mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.0437650499999336,"y":2.4589109999999437},{"x":2.4600349499999083,"y":2.4589109999999437},{"x":2.4600349499999083,"y":-2.435289000000239},{"x":-3.0437650499999336,"y":-2.435289000000239},{"x":-3.0437650499999336,"y":2.4589109999999437}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C544309.obj?uuid=eebb30300a444160abfffc9895d5ba3f",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C544309.step?uuid=eebb30300a444160abfffc9895d5ba3f",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: -0.001009650000014517, y: 0.000012700000070253736, z: -0.02 },
      }}
      {...props}
    />
  )
}
