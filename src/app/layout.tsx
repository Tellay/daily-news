import { ReactNode } from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Inter, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/header'
import { Categories } from '@/components/categories'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfairdisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

export const metadata = {
  title: 'Daily News',
  description:
    'A website created for an english assignment about air pollution.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairdisplay.variable} mx-auto max-w-app bg-white-100 p-4 font-sans text-blue-700`}
      >
        <Header />
        <Categories />
        {children}
      </body>
    </html>
  )
}
