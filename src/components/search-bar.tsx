import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="relative">
      <input
        className="w-full rounded-full border border-blue-700 bg-transparent px-4 py-3 pr-11 text-sm font-medium text-blue-700 outline-none"
        type="text"
        placeholder="Search"
      />
      <Search className="absolute right-4 top-3 h-5 w-5" />
    </div>
  )
}
