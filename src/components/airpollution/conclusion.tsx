export function Conclusion() {
  return (
    <div
      id="conclusion"
      className="flex flex-col space-y-6 border-b border-gray-100 py-9 transition-transform duration-500 hover:-translate-y-1"
    >
      {/* <h1 className="relative w-fit font-alt text-[42px] font-semibold">
        6. Conclusion
        <span className="absolute inset-x-0 bottom-2.5 left-0 -z-10 h-3 bg-red-100" />
      </h1> */}

      <h1 className="font-alt text-[42px] font-semibold underline decoration-red-100 decoration-4">
        6. Conclusion
      </h1>

      <div className="flex flex-col space-y-4">
        <p className="text-justify text-lg font-normal text-gray-200">
          Air pollution is the presence of harmful gases and particles in the
          atmosphere, primarily caused by human activities. It poses significant
          risks to human health, leading to respiratory diseases and other
          health issues, while also negatively impacting the environment through
          smog and acid rain. Addressing air pollution requires collective
          efforts, including stricter regulations, adoption of cleaner
          technologies, and promoting sustainable practices. By taking action to
          reduce air pollution, we can create a healthier environment and a more
          sustainable future for generations to come.
        </p>
      </div>
    </div>
  )
}
