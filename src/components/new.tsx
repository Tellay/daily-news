import { Eye, ThumbsDown, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function New() {
  return (
    <Link
      href="/animal-endangerment"
      className="transition-transform duration-500 hover:-translate-y-1 hover:opacity-90"
    >
      <article className="flex flex-col gap-2">
        <Image
          src="/AnimalEndangerment.jpg"
          alt="Example image of animal endangerment"
          width={4290}
          height={2856}
          className="rounded-xl"
        />

        <div className="my-4 flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-1">
            <Eye className="h-5 w-5" />
            <span className="text-sm font-semibold">10.1k</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex cursor-pointer items-center gap-1">
              <ThumbsUp className="h-5 w-5" />
              <span className="text-sm font-semibold">3.7k</span>
            </div>

            <div className="flex cursor-pointer items-center gap-1">
              <ThumbsDown className="h-5 w-5" />
              <span className="text-sm font-semibold">1.4k</span>
            </div>
          </div>
        </div>

        <small className="flex items-center gap-4 text-sm font-semibold text-gray-200">
          Rui Pedro <span className="block h-[2px] w-4 bg-gray-200" /> May 15,
          2023
        </small>

        <big className="font-alt text-3xl font-semibold hover:underline">
          The rise of Animal Endangerment
        </big>
      </article>
    </Link>
  )
}
