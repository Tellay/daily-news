'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Index } from '@/components/airpollution'
import { Introduction } from '@/components/airpollution/introduction'
import { WhatIsAirPollution } from '@/components/airpollution/what-is-air-pollution'
import { CausesOfAirPollution } from '@/components/airpollution/causes-of-air-pollution'
import { ConsequencesOfAirPollution } from '@/components/airpollution/consequences-of-air-pollution'
import { HowToSolveAirPollution } from '@/components/airpollution/how-to-solve-air-pollution'
import { Conclusion } from '@/components/airpollution/conclusion'
import { BackHome } from '@/components/airpollution/back-home'
import { Gallery } from '@/components/airpollution/gallery'

export default function AirPollutionPage() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollProgress =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100
      setScroll(scrollProgress)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <article>
      <div
        className="fixed left-0 top-0 z-50 h-1 bg-blue-700"
        style={{ width: `${scroll}%` }}
      />

      <BackHome />

      <Image
        src="/CityPollution.jpg"
        width={4344}
        height={2896}
        alt="A city polluted"
        className="mt-2 h-[360px] w-full rounded-xl object-cover md:h-[460px]"
      />

      <Index />
      <Introduction />
      <WhatIsAirPollution />
      <CausesOfAirPollution />
      <ConsequencesOfAirPollution />
      <HowToSolveAirPollution />
      <Conclusion />
      <Gallery />
    </article>
  )
}
