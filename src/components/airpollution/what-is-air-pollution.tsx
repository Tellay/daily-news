export function WhatIsAirPollution() {
  return (
    <div className="flex flex-col space-y-6 border-b border-gray-100 py-9">
      <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        What is Air Pollution?
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-pink-100" />
      </h1>
      <div className="flex flex-col space-y-4">
        <p className="text-justify text-lg font-normal text-gray-200">
          Air Pollution is the presence of harmful gases, particles, and other
          substances in the atmosphere. These gases are usually released by
          industrial processes, vehicles, and other human activities.
        </p>
        <p className="text-justify text-lg font-normal text-gray-200">
          The harmful gases released into the air during these activities
          include carbon monoxide, sulfur dioxide, nitrogen oxides, ozone, and
          volatile organic compounds. Additionally, fine particulate matter,
          which consists of tiny solid or liquid particles suspended in the air,
          can contribute to air pollution. These pollutants have detrimental
          effects on both human health and the environment.
        </p>
      </div>
    </div>
  )
}
