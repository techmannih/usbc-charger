import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin1: ["S1"],
  pin2: ["S2"],
  pin3: ["S3"],
  pin4: ["G"],
  pin5: ["D1"],
  pin6: ["D2"],
  pin7: ["D3"],
  pin8: ["D4"],
  pin9: ["D5"]
} as const

const pinAttributes = {
  pin4: {mustBeConnected: true}
} as const

export const CSD17579Q3A = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      pinLabels={pinLabels}
      pinAttributes={pinAttributes}
      schHeight={1}
      supplierPartNumbers={{
  "jlcpcb": [
    "C97376"
  ]
}}
      manufacturerPartNumber="CSD17579Q3A"
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX="-0.970534mm" pcbY="-1.625473mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin2"]} pcbX="-0.32004mm" pcbY="-1.625727mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin3"]} pcbX="0.329692mm" pcbY="-1.625727mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin4"]} pcbX="0.979678mm" pcbY="-1.625727mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin5"]} pcbX="0.979932mm" pcbY="1.624203mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin6"]} pcbX="0.329946mm" pcbY="1.624203mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin7"]} pcbX="-0.320548mm" pcbY="1.625727mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin8"]} pcbX="-0.970026mm" pcbY="1.624203mm" width="0.3999992mm" height="0.6999986mm" shape="rect" />
<smtpad portHints={["pin9"]} pcbX="0mm" pcbY="0.364363mm" width="2.4500078mm" height="1.8999962mm" shape="rect" />
<silkscreenpath route={[{"x":1.5797529999999966,"y":1.5742919999999998},{"x":1.5797529999999966,"y":-1.595628000000005}]} />
<silkscreenpath route={[{"x":-1.6201390000000089,"y":-1.6255999999999915},{"x":-1.4517369999999943,"y":-1.6255999999999915}]} />
<silkscreenpath route={[{"x":1.4606269999999881,"y":-1.6255999999999915},{"x":1.5797529999999966,"y":-1.6255999999999915}]} />
<silkscreenpath route={[{"x":-1.6201390000000089,"y":-1.6255999999999915},{"x":-1.6201390000000089,"y":1.5742919999999998}]} />
<silkscreenpath route={[{"x":-1.6201390000000089,"y":1.5742919999999998},{"x":-1.4512289999999979,"y":1.5742919999999998}]} />
<silkscreenpath route={[{"x":1.4608809999999863,"y":1.5742919999999998},{"x":1.5797529999999966,"y":1.5742919999999998}]} />
<silkscreenpath route={[{"x":-0.8785859999999985,"y":-2.5246329999999944},{"x":-0.8834067459482782,"y":-2.5612502008630145},{"x":-0.8975404579233839,"y":-2.5953719999999976},{"x":-0.9200239468112983,"y":-2.624673053188701},{"x":-0.9493250000000018,"y":-2.6471565420766012},{"x":-0.9834467991369849,"y":-2.661290254051721},{"x":-1.0200639999999908,"y":-2.666111000000001},{"x":-1.056681200863025,"y":-2.661290254051721},{"x":-1.0908030000000082,"y":-2.6471565420766012},{"x":-1.1201040531887116,"y":-2.624673053188701},{"x":-1.1425875420766118,"y":-2.5953719999999976},{"x":-1.1567212540517318,"y":-2.5612502008630145},{"x":-1.1615420000000114,"y":-2.5246329999999944},{"x":-1.1567212540517318,"y":-2.4880157991369742},{"x":-1.1425875420766118,"y":-2.453893999999991},{"x":-1.1201040531887116,"y":-2.4245929468112877},{"x":-1.0908030000000082,"y":-2.4021094579233733},{"x":-1.056681200863025,"y":-2.3879757459482676},{"x":-1.0200639999999908,"y":-2.383154999999988},{"x":-0.9834467991369849,"y":-2.3879757459482676},{"x":-0.9493250000000018,"y":-2.4021094579233733},{"x":-0.9200239468112983,"y":-2.4245929468112877},{"x":-0.8975404579233839,"y":-2.453893999999991},{"x":-0.8834067459482782,"y":-2.4880157991369742},{"x":-0.8785859999999985,"y":-2.5246329999999944}]} />
<silkscreentext text="{NAME}" pcbX="-0.02032mm" pcbY="2.981073mm" anchorAlignment="center" fontSize="1mm" />
<courtyardoutline outline={[{"x":-1.870519999999999,"y":2.231072999999995},{"x":1.8298800000000028,"y":2.231072999999995},{"x":1.8298800000000028,"y":-2.917127000000008},{"x":-1.870519999999999,"y":-2.917127000000008},{"x":-1.870519999999999,"y":2.231072999999995}]} />
      </footprint>}
      cadModel={{
        objUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C97376.obj?uuid=33c976fec6414d2c8ad0f9659097761a",
        stepUrl: "https://modelcdn.tscircuit.com/easyeda_models/assets/C97376.step?uuid=33c976fec6414d2c8ad0f9659097761a",
        pcbRotationOffset: 90,
        modelOriginPosition: { x: 0.02462529999999674, y: -0.020205700000005322, z: 0 },
      }}
      {...props}
    />
  )
}
