import { Menu } from 'lucide-react'
import Link from 'next/link'
import { SearchBar } from './search-bar'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-1 items-center justify-start gap-6">
        <Menu className="h-6 w-6 cursor-pointer hover:opacity-80" />
        <SearchBar />
      </div>

      <Link className="flex flex-1 justify-center" href="/">
        <h1 className="font-alt text-[64px] font-bold leading-none hover:opacity-90">
          Daily News
        </h1>
      </Link>

      <div className="flex flex-1 items-center justify-end gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:underline hover:opacity-80"
        >
          Sign In
        </Link>
        <Link
          href="/"
          className="rounded-full bg-blue-700 p-4 text-sm font-medium text-white-50 hover:opacity-90"
        >
          Subscribe Now
        </Link>
      </div>
    </header>
  )
}
