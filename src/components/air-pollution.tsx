import { ThumbsDown, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function AirPollution() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className="relative border-b border-gray-100 py-9">
      <div className="relative">
        <Image
          src={'/AirPollution.jpg'}
          width={5425}
          height={3617}
          alt="Example image of air pollution"
          className="h-[460px] w-full rounded-xl object-cover"
        />

        <div className="absolute left-6 top-6 rounded-full bg-green-100 px-6 py-3 text-sm font-semibold text-green-50">
          Environment
        </div>
      </div>

      <div className="sticky z-10 mx-11 -mt-40 rounded-2xl bg-white-100 p-16 shadow-xl transition-all duration-500 hover:-translate-y-1">
        <Link href="/airpollution" className="flex flex-col space-y-4">
          <h2 className="font-alt text-6xl font-semibold hover:underline">
            Clearing the Air: Understanding and Combating Air Pollution
          </h2>

          <small className="flex items-center gap-4 text-sm font-semibold text-gray-200">
            João Gonçalves, Diogo Castro, Lucas Zanetti, Ricardo Cardoso{' '}
            <span className="block h-[2px] w-4 bg-gray-200" />
            {formattedDate}
          </small>
        </Link>

        <div className="mt-6 flex items-center justify-end gap-6 text-blue-700">
          <div className="flex cursor-pointer items-center gap-1 hover:opacity-90">
            <ThumbsUp className="h-6 w-6" />
            <span className="text-sm font-semibold">5.8k</span>
          </div>

          <div className="flex cursor-pointer items-center gap-1 hover:opacity-90">
            <ThumbsDown className="h-6 w-6" />
            <span className="text-sm font-semibold">1.2k</span>
          </div>
        </div>
      </div>
    </article>
  )
}
