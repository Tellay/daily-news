import Image from 'next/image'

export default function AirPollutionPage() {
  return (
    <main className="my-9">
      <div className="grid grid-cols-2 gap-4 rounded-md bg-[#873e23] p-4 text-white-100">
        <div className="flex flex-col space-y-4">
          <h2 className="font-alt text-3xl font-bold">
            Causes of Air Pollution
          </h2>
          <p className="text-justify">
            The modern world is filled to the brim with factors that play a huge
            role in the ever-growing problem that is Air Pollution.
          </p>
          <p>
            Air Pollution happens due to the release of harmful gases into the
            atmosphere. The origins of these gases are numerous and can be
            divided into two categories.
          </p>
          <h3 className="font-alt text-3xl font-bold">Natural</h3>
          <p>
            Natural gases are those that are propelled into the atmosphere due
            to our planet&apos;s behavior. These may vay between volcanoes,
            animal feces, and decomposition.
          </p>
          <h3 className="font-alt text-3xl font-bold">Human</h3>
          <p>
            Human Humans are of course the main contributors to this problem.
            This is due to our history of building countless factories
            worldwide, the overuse of gasoline/diesel transports, huge fire, and
            many more.
          </p>
        </div>
        <Image
          src="/pollution.jpg"
          width={4344}
          height={2896}
          alt="Nelson"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </main>
  )
}
