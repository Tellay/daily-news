'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Home } from '@/components/airpollution/home'
import { Introduction } from '@/components/airpollution/introduction'
import { WhatIsAirPollution } from '@/components/airpollution/what-is-air-pollution'
import { CausesOfAirPollution } from '@/components/airpollution/causes-of-air-pollution'
import { ConsequencesOfAirPollution } from '@/components/airpollution/consequences-of-air-pollution'
import { HowToSolveAirPollution } from '@/components/airpollution/how-to-mitigate-air-pollution'
import { Conclusion } from '@/components/airpollution/conclusion'
import { BackHome } from '@/components/airpollution/back-home'
import { Gallery } from '@/components/airpollution/gallery'
import { ArrowUpToLine } from 'lucide-react'

import { AnimatePresence, motion } from 'framer-motion'

export default function AirPollutionPage() {
  const [scroll, setScroll] = useState(0)
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollProgress =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100
      setScroll(scrollProgress)

      if (window.scrollY > 650) {
        setShowScrollToTopBtn(true)
        return
      }

      if (window.scrollY < 650) {
        setShowScrollToTopBtn(false)
      }
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

      <AnimatePresence>
        {showScrollToTopBtn && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => window.scrollTo(0, 0)}
            className={`${
              showScrollToTopBtn ? 'fixed' : 'hidden'
            } left-1/2 top-4 z-10 -translate-x-1/2 transform rounded-full bg-blue-700 px-9 py-3 text-white-50 hover:bg-blue-600`}
          >
            <ArrowUpToLine className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <BackHome />

      <Image
        src="/CityPollution.jpg"
        width={4344}
        height={2896}
        alt="A city polluted"
        className="mt-3 h-[360px] w-full rounded-xl object-cover md:h-[460px]"
      />

      <Home />
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
