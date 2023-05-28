import { Dot } from 'lucide-react'

export function Index() {
  const PageTopics = [
    'Introduction',
    'What is Air Pollution?',
    'What are the causes of Air Pollution?',
    'What are the consequences?',
    'How to solve this problem?',
    'Conclusion',
    'Gallery',
  ]

  return (
    <div className="flex flex-col space-y-6 border-b border-gray-100 py-9">
      {/* <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        Index
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-purple-100" />
      </h1> */}

      <h1 className="font-alt text-[42px] font-semibold underline decoration-purple-100 decoration-wavy">
        Index
      </h1>

      <ol className="space-y-1.5 text-lg font-medium">
        {PageTopics.map((topic, topicIdx) => (
          <li className="flex items-center" key={topicIdx}>
            <span className="text-gray-200">{topicIdx + 1}</span>
            <Dot className="h-7 w-7" />
            <span className="cursor-pointer hover:underline hover:opacity-90">
              {topic}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
