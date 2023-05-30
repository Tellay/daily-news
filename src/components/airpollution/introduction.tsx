export function Introduction() {
  return (
    <div
      id="introduction"
      className="flex flex-col space-y-6 border-b border-gray-100 py-9 transition-transform duration-500 hover:-translate-y-1"
    >
      {/* <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        1. Introduction
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-green-60" />
      </h1> */}

      <h1 className="font-alt text-[42px] font-semibold underline decoration-green-60 decoration-4">
        1. Introduction
      </h1>

      <div className="flex flex-col space-y-4">
        <p className="text-justify text-lg font-normal text-gray-200">
          Air pollution is a major problem in nowaday&apos;s society.
        </p>
        <p className="text-justify text-lg font-normal text-gray-200">
          Everyday, millions of people worldwide die because of it. So we here
          at the <i className="italic underline">daily-news</i> decided to
          spread some awareness about this issue how its provoked, the damages
          it has on our society and how we can end for good, together.
        </p>
        <p className="text-justify text-lg font-normal text-gray-200">
          To achieve this, we created this page on our website dedicated to this
          goal in the hopes that its seen by as many people as possible and help
          spread the word.
        </p>
      </div>
    </div>
  )
}
