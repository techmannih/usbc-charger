import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["VOUT"],
  pin2: ["VIN"],
  pin3: ["SW"],
  pin4: ["BST"],
  pin5: ["DM"],
  pin6: ["DP"],
  pin7: ["CC1"],
  pin8: ["CC2"],
  pin9: ["GND"]
} as const

const pinAttributes = {
  pin2: {requiresPower: true},
  pin9: {requiresGround: true}
} as const

/**
 * Exact standard, non-PPS IP6520 ordering identity used by this design.
 * Other IP6520 family variants provide different PDO sets and are not drop-in
 * BOM substitutions even when their package and pinout match.
 */
export const IP6520_STANDARD_NON_PPS_MPN = "IP6520"
export const IP6520_STANDARD_NON_PPS_LCSC = "C7433861"

export const IP6520StandardNonPps = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      supplierPartNumbers={{
  "jlcpcb": [
    IP6520_STANDARD_NON_PPS_LCSC
  ]
}}
      manufacturerPartNumber={IP6520_STANDARD_NON_PPS_MPN}
      footprint={<footprint>
        <smtpad portHints={["pin5"]} pcbX="1.905mm" pcbY="2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin6"]} pcbX="0.635mm" pcbY="2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin7"]} pcbX="-0.635mm" pcbY="2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin8"]} pcbX="-1.905mm" pcbY="2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin4"]} pcbX="1.905mm" pcbY="-2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin3"]} pcbX="0.635mm" pcbY="-2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin2"]} pcbX="-0.635mm" pcbY="-2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin1"]} pcbX="-1.905mm" pcbY="-2.682494mm" width="0.6299962mm" height="1.864995mm" radius="0.3149981mm" shape="pill" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0mm" width="3.0999938mm" height="2.1999956mm" shape="rect" />
<silkscreenpath route={[{"x":-2.576118799999904,"y":-1.5213838000000806},{"x":-2.576118799999904,"y":1.5214599999999336},{"x":2.576245800000038,"y":1.5214599999999336},{"x":2.576245800000038,"y":-1.5213838000000806},{"x":-2.576118799999904,"y":-1.5213838000000806}]} />
<silkscreenpath route={[{"x":-2.522220000000175,"y":-2.682493999999906},{"x":-2.527335010512502,"y":-2.7213463621366145},{"x":-2.5423314625363673,"y":-2.757551000000035},{"x":-2.566187372648983,"y":-2.7886406273510147},{"x":-2.5972769999999628,"y":-2.8124965374636304},{"x":-2.633481637863383,"y":-2.827492989487496},{"x":-2.672333999999978,"y":-2.83260800000005},{"x":-2.711186362136573,"y":-2.827492989487496},{"x":-2.747391000000107,"y":-2.8124965374636304},{"x":-2.7784806273510867,"y":-2.7886406273510147},{"x":-2.8023365374637024,"y":-2.757551000000035},{"x":-2.817332989487568,"y":-2.7213463621366145},{"x":-2.8224480000000085,"y":-2.682493999999906},{"x":-2.817332989487568,"y":-2.643641637863425},{"x":-2.8023365374637024,"y":-2.6074370000000044},{"x":-2.7784806273510867,"y":-2.576347372648911},{"x":-2.747391000000107,"y":-2.5524914625362953},{"x":-2.711186362136573,"y":-2.5374950105125436},{"x":-2.672333999999978,"y":-2.532379999999989},{"x":-2.633481637863383,"y":-2.5374950105125436},{"x":-2.5972769999999628,"y":-2.5524914625362953},{"x":-2.566187372648983,"y":-2.576347372648911},{"x":-2.5423314625363673,"y":-2.6074370000000044},{"x":-2.527335010512502,"y":-2.643641637863425},{"x":-2.522220000000175,"y":-2.682493999999906}]} />
<silkscreenpath route={[{"x":-2.0088859999999613,"y":-1.0159999999999627},{"x":-2.014001010512402,"y":-1.0548523621364438},{"x":-2.0289974625362674,"y":-1.0910570000000916},{"x":-2.052853372648883,"y":-1.1221466273510714},{"x":-2.083942999999863,"y":-1.146002537463687},{"x":-2.120147637863397,"y":-1.1609989894875525},{"x":-2.158999999999992,"y":-1.1661139999998795},{"x":-2.197852362136473,"y":-1.1609989894875525},{"x":-2.234057000000007,"y":-1.146002537463687},{"x":-2.2651466273511005,"y":-1.1221466273510714},{"x":-2.289002537463716,"y":-1.0910570000000916},{"x":-2.303998989487468,"y":-1.0548523621364438},{"x":-2.3091139999999086,"y":-1.0159999999999627},{"x":-2.303998989487468,"y":-0.9771476378633679},{"x":-2.289002537463716,"y":-0.9409429999998338},{"x":-2.2651466273511005,"y":-0.909853372648854},{"x":-2.234057000000007,"y":-0.8859974625362383},{"x":-2.197852362136473,"y":-0.8710010105123729},{"x":-2.158999999999992,"y":-0.8658860000000459},{"x":-2.120147637863397,"y":-0.8710010105123729},{"x":-2.083942999999863,"y":-0.8859974625362383},{"x":-2.052853372648883,"y":-0.909853372648854},{"x":-2.0289974625362674,"y":-0.9409429999998338},{"x":-2.014001010512402,"y":-0.9771476378633679},{"x":-2.0088859999999613,"y":-1.0159999999999627}]} />
<silkscreentext text="{NAME}" pcbX="-0.1143mm" pcbY="4.302mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-3.0693999999999733,"y":3.552000000000021},{"x":2.8408000000000584,"y":3.552000000000021},{"x":2.8408000000000584,"y":-3.80600000000004},{"x":-3.0693999999999733,"y":-3.80600000000004},{"x":-3.0693999999999733,"y":3.552000000000021}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7433861.obj?uuid=81ba1bedf22c4c37b8b1e489b7ae4cf7",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C7433861.step?uuid=81ba1bedf22c4c37b8b1e489b7ae4cf7",
        pcbRotationOffset: 0,
        modelOriginPosition: { x: 0.000012699999956566899, y: 0, z: -0.85 },
      }}
      {...props}
    />
  )
}

export const IP6520 = IP6520StandardNonPps
