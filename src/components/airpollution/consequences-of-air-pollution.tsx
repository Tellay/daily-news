import { Dot } from 'lucide-react'

export function ConsequencesOfAirPollution() {
  return (
    <div
      id="consequences"
      className="flex flex-col space-y-6 border-b border-gray-100 py-9 transition-transform duration-500 hover:-translate-y-1"
    >
      {/* <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        4. What are the consequences?
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-yellow-100" />
      </h1> */}

      <h1 className="font-alt text-[42px] font-semibold underline decoration-yellow-100 decoration-4">
        4. What are the consequences?
      </h1>

      <div className="flex flex-col space-y-4">
        <ul className="flex flex-col gap-10 pt-6 md:grid-cols-2">
          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              <h3 className="underline decoration-wavy">Climate Change</h3>
            </div>

            <p className="ml-8 text-justify text-lg font-normal text-gray-200">
              Air pollution plays a significant role in climate change.
              Emissions of greenhouse gases like carbon dioxide, methane, and
              nitrous oxide contribute to the greenhouse effect, trapping heat
              in the atmosphere and leading to global warming. This results in
              rising temperatures, altered weather patterns, more frequent and
              severe natural disasters, such as hurricanes and heatwaves, and
              the melting of polar ice caps and glaciers, leading to sea-level
              rise.
            </p>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              <h3 className="underline decoration-wavy">
                Environmental Degradation
              </h3>
            </div>

            <p className="ml-8 text-justify text-lg font-normal text-gray-200">
              Air pollution has detrimental effects on the environment. Acid
              rain, caused by pollutants reacting with water vapor in the
              atmosphere, damages forests, crops, and aquatic ecosystems. It
              leads to the acidification of lakes and rivers, harming fish and
              other aquatic life. Airborne pollutants can also settle on soil
              and contaminate it, affecting agricultural productivity.
              Additionally, air pollution can harm plant life, reducing crop
              yields and disrupting ecosystems.
            </p>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              <h3 className="underline decoration-wavy">Ozone Depletion</h3>
            </div>

            <p className="ml-8 text-justify text-lg font-normal text-gray-200">
              Certain air pollutants, such as chlorofluorocarbons (CFCs),
              contribute to the depletion of the ozone layer in the Earth&apos;s
              stratosphere. The ozone layer shields the planet from harmful
              ultraviolet radiation from the sun. Thinning of the ozone layer
              increases UV radiation exposure, leading to higher risks of skin
              cancer, cataracts, and weakened immune systems in humans. It also
              negatively affects marine ecosystems, agricultural productivity,
              and the overall balance of ecosystems.
            </p>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              <h3 className="underline decoration-wavy">
                Adverse Health Effects
              </h3>
            </div>

            <p className="ml-8 text-justify text-lg font-normal text-gray-200">
              Air pollution significantly affects human health, both in the
              short term and the long term. The inhalation of polluted air can
              lead to respiratory problems such as asthma, bronchitis, and other
              chronic obstructive pulmonary diseases. Fine particulate matter
              and toxic gases can penetrate deep into the lungs, causing
              inflammation, reduced lung function, and increasing the risk of
              respiratory infections. Prolonged exposure to air pollution is
              also associated with cardiovascular diseases, lung cancer, and
              even premature death.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
