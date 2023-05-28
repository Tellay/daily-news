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
          className="h-[360px] w-full rounded-xl object-cover md:h-[460px]"
        />

        <div className="absolute left-4 top-4 rounded-full bg-green-100 px-6 py-3 text-xs font-semibold text-green-50 sm:text-sm md:left-6 md:top-6">
          Environment
        </div>
      </div>

      <div className="sticky z-10 mx-4 -mt-40 rounded-2xl bg-white-100 p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 md:mx-11 md:p-16">
        <Link href="/airpollution" className="flex flex-col space-y-4">
          <h2 className="font-alt text-[29px] font-semibold hover:underline sm:text-4xl md:text-6xl">
            Clearing the Air: Understanding and Combating Air Pollution
          </h2>

          <small className="no- flex items-center gap-4 text-sm font-bold text-gray-200">
            <div className="truncate">
              João Gonçalves, Diogo Castro, Lucas Zanetti, Ricardo Cardoso{' '}
            </div>
            <span className="block h-[2px] w-4 bg-gray-200" />
            <div className="whitespace-nowrap">{formattedDate}</div>
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
