import { Dot } from 'lucide-react'
import Link from 'next/link'

export function Home() {
  const PageTopics = [
    {
      topic_name: 'Introduction',
      topic_link: '/airpollution/#introduction',
    },

    {
      topic_name: 'What is Air Pollution?',
      topic_link: '/airpollution/#air-pollution',
    },

    {
      topic_name: 'What are the causes of Air Pollution?',
      topic_link: '/airpollution/#causes-of-air-pollution',
    },

    {
      topic_name: 'What are the consequences?',
      topic_link: '/airpollution/#consequences',
    },

    {
      topic_name: 'How to mitigate this problem?',
      topic_link: '/airpollution/#how-to-mitigate',
    },

    {
      topic_name: 'Conclusion',
      topic_link: '/airpollution/#conclusion',
    },

    {
      topic_name: 'Gallery',
      topic_link: '/airpollution/#gallery',
    },
  ]

  return (
    <div className="flex flex-col space-y-6 border-b border-gray-100 py-9">
      {/* <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        Index
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-purple-100" />
      </h1> */}

      <h1 className="font-alt text-[42px] font-semibold underline decoration-purple-100 decoration-4">
        Home
      </h1>

      <ol className="space-y-1.5 text-lg font-medium">
        {PageTopics.map((topic, topicIdx) => (
          <Link href={topic.topic_link} key={topicIdx}>
            <li className="flex items-center">
              <span className="text-gray-200">{topicIdx + 1}</span>
              <Dot className="h-7 w-7" />
              <span className="cursor-pointer hover:underline hover:opacity-90">
                {topic.topic_name}
              </span>
            </li>
          </Link>
        ))}
      </ol>
    </div>
  )
}
