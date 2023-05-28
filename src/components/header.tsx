import Link from 'next/link'
import { SearchBar } from './search-bar'

export function Header() {
  return (
    <header className="hidden items-center justify-between pt-4 lg:flex">
      <div className="flex flex-1 items-center justify-start gap-6">
        <SearchBar />
      </div>

      <Link className="flex flex-1 justify-center" href="/">
        <h1 className="font-alt text-[64px] font-bold leading-none hover:opacity-90">
          daily-news
        </h1>
      </Link>

      <div className="flex flex-1 items-center justify-end gap-6">
        <button className="text-sm font-medium hover:underline hover:opacity-80">
          Sign In
        </button>
        <button className="rounded-full bg-blue-700 p-4 text-sm font-medium text-white-50 hover:opacity-90">
          Subscribe Now
        </button>
      </div>
    </header>
  )
}
