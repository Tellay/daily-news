'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { MobileMenu } from './mobile-menu'
import { useCallback, useState } from 'react'

export function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }, [isMobileMenuOpen])

  return (
    <header className="flex items-center justify-between pt-4 lg:hidden">
      <div className="flex flex-1 items-center justify-between gap-5 sm:justify-start">
        <Menu
          className="h-7 w-7 cursor-pointer hover:opacity-80 sm:hidden"
          onClick={handleToggleMobileMenu}
        />
        <Link
          className="-mt-1 flex flex-1 justify-center sm:justify-start"
          href="/"
        >
          <h1 className="whitespace-nowrap font-alt text-4xl font-bold leading-none hover:opacity-90 sm:text-5xl">
            daily-news
          </h1>
        </Link>
      </div>

      <Link className="hidden flex-1 justify-center lg:flex" href="/">
        <h1 className="whitespace-nowrap font-alt text-[64px] font-bold leading-none hover:opacity-90">
          daily-news
        </h1>
      </Link>

      <div className="hidden flex-1 items-center justify-end gap-6 sm:flex">
        <button className="text-sm font-medium hover:underline hover:opacity-80">
          Sign In
        </button>
        <button className="rounded-full bg-blue-700 p-4 text-sm font-medium text-white-50 hover:opacity-90">
          Subscribe Now
        </button>
      </div>

      <MobileMenu isMenuOpen={isMobileMenuOpen} />
    </header>
  )
}
