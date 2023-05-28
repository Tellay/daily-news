import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Inter, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/header'
import { Categories } from '@/components/categories'
import { Footer } from '@/components/footer'
import { MobileHeader } from '@/components/mobile-header'
import { SearchBar } from '@/components/search-bar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfairdisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

export const metadata = {
  title: 'daily-news',
  description:
    'A website created for an english assignment about air pollution.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairdisplay.variable} mx-auto max-w-app bg-white-100 px-5 font-sans text-blue-700`}
      >
        <Header />
        <MobileHeader />
        <div className="mt-8 block lg:hidden">
          <SearchBar />
        </div>
        <Categories />
        {children}
        <Footer />
      </body>
    </html>
  )
}
