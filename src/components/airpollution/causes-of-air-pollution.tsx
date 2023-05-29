import { Dot } from 'lucide-react'

export function CausesOfAirPollution() {
  return (
    <div
      id="causes-of-air-pollution"
      className="flex flex-col space-y-6 border-b border-gray-100 py-9 transition-transform duration-500 hover:-translate-y-1"
    >
      {/* <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        3. What are the causes of Air Pollution?
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-brown-100" />
      </h1> */}

      <h1 className="font-alt text-[42px] font-semibold underline decoration-brown-100 decoration-4">
        3. What are the causes of Air Pollution?
      </h1>

      <div className="flex flex-col space-y-4">
        <p className="text-justify text-lg font-normal text-gray-200">
          The modern world is filled to the brim with factors that play a huge
          role in the ever-growing problem that is Air Pollution.
        </p>
        <p className="text-justify text-lg font-normal text-gray-200">
          Air Pollution happens due to the release of harmful gases into the
          atmosphere. The origins of these gases are numerous and can be divided
          into two categories.
        </p>

        <ul className="grid grid-cols-1 gap-10 pt-6 md:grid-cols-2">
          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              <h3>Natural</h3>
            </div>

            <p className="ml-8 text-justify text-lg font-normal text-gray-200">
              Natural gases are those that are propelled into the atmosphere due
              to our planet&apos;s behavior. These may vay between volcanoes,
              animal feces, and decomposition.
            </p>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              <h3>Human</h3>
            </div>

            <p className="ml-8 text-justify text-lg font-normal text-gray-200">
              Human Humans are of course the main contributors to this problem.
              This is due to our history of building countless factories
              worldwide, the overuse of gasoline/diesel transports, huge fire,
              and many more.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
