"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AirPollutionPage() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollProgress =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScroll(scrollProgress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-blue-700"
        style={{ width: `${scroll}%` }}
      />
      <article className="py-9">
        <div className="flex items-center gap-2 text-[15px] font-medium">
          <Link
            href="/"
            className="text-gray-200 hover:underline hover:opacity-90"
          >
            Home
          </Link>
          <span className="block h-[2px] w-4 bg-blue-700" />
          <span className="">Air Pollution</span>
        </div>

        <Image
          src="/CityPollution.jpg"
          width={4344}
          height={2896}
          alt="Nelson"
          className="mt-2 h-[460px] w-full rounded-xl object-cover"
        />

        <div className="flex flex-col space-y-6 border-b border-gray-100 py-9">
          <h1 className="relative w-fit font-alt text-[42px] font-semibold">
            What is Air Pollution?
            <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-pink-100" />
          </h1>

          <p className="text-justify text-lg font-normal text-gray-200">
            Air Pollution is the presence of harmful gases, particles, and other
            substances in the atmosphere. These gases are usually released by
            industrial processes, vehicles, and other human activities.
            <br />
            The harmful gases released into the air during these activities
            include carbon monoxide, sulfur dioxide, nitrogen oxides, ozone, and
            volatile organic compounds. Additionally, fine particulate matter,
            which consists of tiny solid or liquid particles suspended in the
            air, can contribute to air pollution. These pollutants have
            detrimental effects on both human health and the environment.
          </p>
        </div>

        <div className="flex flex-col space-y-6 border-b border-gray-100 py-9">
          <h1 className="relative w-fit font-alt text-[42px] font-semibold">
            What are the causes of Air Pollution?
            <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-brown-100" />
          </h1>

          <div className="flex flex-col space-y-4">
            <p className="text-justify text-lg font-normal text-gray-200">
              The modern world is filled to the brim with factors that play a
              huge role in the ever-growing problem that is Air Pollution.
            </p>

            <p className="text-justify text-lg font-normal text-gray-200">
              Air Pollution happens due to the release of harmful gases into the
              atmosphere. The origins of these gases are numerous and can be
              divided into two categories.
            </p>
          </div>
        </div>
      </article>

      {/* <div className="grid grid-cols-2 gap-4 rounded-md bg-[#873e23] p-4 text-white-100">
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
      </div> */}
    </main>
  );
}
