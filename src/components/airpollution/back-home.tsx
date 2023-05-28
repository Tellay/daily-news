import Link from 'next/link'

export function BackHome() {
  return (
    <div className="mt-8 flex items-center gap-2 text-[15px] font-medium">
      <Link href="/" className="text-gray-200 hover:underline hover:opacity-90">
        Home
      </Link>
      <span className="block h-[2px] w-4 bg-blue-700" />
      <span>Air Pollution</span>
    </div>
  )
}
