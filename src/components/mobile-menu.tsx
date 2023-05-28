'use client'

import { AnimatePresence, motion } from 'framer-motion'

export function MobileMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, scale: 0.7, y: 99 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 99 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-x-0 top-[54px] z-20 flex flex-col space-y-2 rounded-3xl border-b border-gray-100 bg-white-100 p-4"
        >
          <button className="p-4 text-sm font-medium hover:underline hover:opacity-80">
            Sign In
          </button>
          <button className="rounded-full bg-blue-700 p-4 text-sm font-medium text-white-50 hover:opacity-90">
            Subscribe Now
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
