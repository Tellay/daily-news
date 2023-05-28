import { New } from './new'

export function InterestingNews() {
  return (
    <div className="border-b border-gray-100 py-9">
      <h2 className="relative w-fit font-alt text-2xl font-bold">
        News that may interest you
        <span className="absolute inset-x-0 bottom-0 left-0 -z-10 h-3 bg-pink-100" />
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <New />
        <New />
        <New />

        <New />
        <New />
        <New />

        <New />
        <New />
        <New />
      </div>
    </div>
  )
}
