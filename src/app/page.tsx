import { AirPollution } from '@/components/air-pollution'
import { Categories } from '@/components/categories'
import { Footer } from '@/components/footer'
import { InterestingNews } from '@/components/interesting-news'

export default function Home() {
  return (
    <main>
      <Categories />
      <AirPollution />
      <InterestingNews />
      <Footer />
    </main>
  )
}
