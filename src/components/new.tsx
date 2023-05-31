import { Eye, ThumbsDown, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface INew {
  link: string
  img: {
    path: string
    alt: string
    width: number
    height: number
  }
  title: string
  views: string
  likes: string
  dislikes: string
  author: string
  createdAt: string
}

export function New({
  link,
  img,
  title,
  views,
  likes,
  dislikes,
  author,
  createdAt,
}: INew) {
  return (
    <Link
      href={link}
      className="transition-transform duration-500 hover:-translate-y-1 hover:opacity-90"
    >
      <article className="flex flex-col gap-2">
        <Image
          src={img.path}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="h-[230px] rounded-xl object-cover"
        />

        <div className="my-4 flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-1">
            <Eye className="h-5 w-5" />
            <span className="text-sm font-semibold">{views}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex cursor-pointer items-center gap-1">
              <ThumbsUp className="h-5 w-5" />
              <span className="text-sm font-semibold">{likes}</span>
            </div>

            <div className="flex cursor-pointer items-center gap-1">
              <ThumbsDown className="h-5 w-5" />
              <span className="text-sm font-semibold">{dislikes}</span>
            </div>
          </div>
        </div>

        <small className="flex items-center gap-4 text-sm font-semibold text-gray-200">
          {author} <span className="block h-[2px] w-4 bg-gray-200" />
          {createdAt}
        </small>

        <big className="font-alt text-3xl font-semibold hover:underline">
          {title}
        </big>
      </article>
    </Link>
  )
}
