import { Dot } from 'lucide-react'

export function HowToSolveAirPollution() {
  return (
    <div
      id="how-to-mitigate"
      className="flex flex-col space-y-6 border-b border-gray-100 py-9 transition-transform duration-500 hover:-translate-y-1"
    >
      {/* <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        5. How to solve this problem?
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-blue-100" />
      </h1> */}

      <h1 className="font-alt text-[42px] font-semibold underline decoration-blue-100 decoration-4">
        5. How to mitigate this problem?
      </h1>

      <div className="flex flex-col space-y-4">
        <p className="text-justify text-lg font-normal text-gray-200">
          There are some things that we can do to mitigate the air pollution
          effects. Here are some strategies that can help to lessen these
          problems:
        </p>

        <ul className="">
          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              Reduce vehicle emissions
            </div>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              Support clean energy
            </div>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              Conserve energy
            </div>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              Public awareness and education
            </div>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              International cooperation
            </div>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              Promote sustainable practices
            </div>
          </li>

          <li className="flex flex-col space-y-3">
            <div className="flex items-center text-xl font-medium">
              <Dot className="h-8 w-8" />
              Reduction of industrial emissions
            </div>
          </li>
        </ul>
        {/* <p className="text-justify text-lg font-normal text-gray-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quam
          veritatis qui perferendis unde doloribus reiciendis voluptatem quasi
          quidem obcaecati rem consectetur odio placeat itaque magnam, nulla
          tempore earum, vel deserunt temporibus numquam cupiditate beatae neque
          animi! Libero optio suscipit repellendus iure voluptates aliquid
          pariatur earum. Qui doloremque dolores recusandae.
        </p> */}
      </div>
    </div>
  )
}
