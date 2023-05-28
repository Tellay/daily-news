'use client'

import { Menu, X } from 'lucide-react'
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
      <div className="flex justify-between" onClick={handleToggleMobileMenu}>
        <Menu
          className={`${
            isMobileMenuOpen ? 'hidden' : 'block'
          } h-7 w-7 cursor-pointer hover:opacity-80 sm:hidden`}
        />
        <X
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } h-7 w-7 cursor-pointer hover:opacity-80 sm:hidden`}
        />
      </div>
      <Link className="mx-auto -mt-1" href="/">
        <h1 className="whitespace-nowrap font-alt text-4xl font-bold leading-none hover:opacity-90 sm:text-5xl">
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
