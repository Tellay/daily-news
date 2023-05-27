import { AirPollution } from '@/components/air-pollution'
import { Footer } from '@/components/footer'
import { InterestingNews } from '@/components/interesting-news'

export default function Home() {
  return (
    <main>
      <AirPollution />
      <InterestingNews />
      <Footer />
    </main>
  )
}
