import Image from 'next/image'

export function Gallery() {
  const GalleryImages = [
    {
      width: 2611,
      heigth: 4641,
      image_path: '/PollutingChimney.jpg',
      image_alt: 'A chimney polluting',
    },

    {
      width: 5678,
      heigth: 3786,
      image_path: '/IndustryPolluting.jpg',
      image_alt: 'The industry polluting',
    },

    {
      width: 5678,
      heigth: 3786,
      image_path: '/CarPolluting.jpg',
      image_alt: 'A car polluting',
    },

    {
      width: 5678,
      heigth: 3786,
      image_path: '/VolcanoPolluting.jpg',
      image_alt: 'A volcano polluting',
    },

    {
      width: 5678,
      heigth: 3786,
      image_path: '/BuildingPolluting.jpg',
      image_alt: 'A house on fire polluting',
    },

    {
      width: 5678,
      heigth: 3786,
      image_path: '/RocketPolluting.jpg',
      image_alt: 'A rocket polluting',
    },
  ]

  return (
    <div className="flex flex-col space-y-6 border-b border-gray-100 py-9">
      <h1 className="font-alt text-[42px] font-semibold underline decoration-purple-200 decoration-wavy">
        7. Gallery
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-8">
          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src={GalleryImages[0].image_path}
              width={GalleryImages[0].width}
              height={GalleryImages[0].heigth}
              alt={GalleryImages[0].image_alt}
              className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105 hover:opacity-90"
            />

            <h3 className="absolute bottom-4 left-4 hidden text-white-100 group-hover:block">
              {GalleryImages[0].image_alt}
            </h3>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src={GalleryImages[1].image_path}
              width={GalleryImages[1].width}
              height={GalleryImages[1].heigth}
              alt={GalleryImages[1].image_alt}
              className="aspect-video h-full w-full object-cover transition-transform duration-500 hover:scale-105 hover:opacity-90"
            />

            <h3 className="absolute bottom-4 left-4 hidden text-white-100 group-hover:block">
              {GalleryImages[1].image_alt}
            </h3>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src={GalleryImages[2].image_path}
              width={GalleryImages[2].width}
              height={GalleryImages[2].heigth}
              alt={GalleryImages[2].image_alt}
              className="aspect-video h-full w-full object-cover transition-transform duration-500 hover:scale-105 hover:opacity-90"
            />

            <h3 className="absolute bottom-4 left-4 hidden text-white-100 group-hover:block">
              {GalleryImages[2].image_alt}
            </h3>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src={GalleryImages[3].image_path}
              width={GalleryImages[3].width}
              height={GalleryImages[3].heigth}
              alt={GalleryImages[3].image_alt}
              className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105 hover:opacity-90"
            />

            <h3 className="absolute bottom-4 left-4 hidden text-white-100 group-hover:block">
              {GalleryImages[3].image_alt}
            </h3>
          </div>
        </div>

        <div className="grid gap-8 sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src={GalleryImages[4].image_path}
              width={GalleryImages[4].width}
              height={GalleryImages[4].heigth}
              alt={GalleryImages[4].image_alt}
              className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-105 hover:opacity-90"
            />

            <h3 className="absolute bottom-4 left-4 hidden text-white-100 group-hover:block">
              {GalleryImages[4].image_alt}
            </h3>
          </div>

          <div className="group relative overflow-hidden rounded-xl">
            <Image
              src={GalleryImages[5].image_path}
              width={GalleryImages[5].width}
              height={GalleryImages[5].heigth}
              alt={GalleryImages[5].image_alt}
              className="aspect-video h-full w-full object-cover transition-transform duration-500 hover:scale-105 hover:opacity-90"
            />

            <h3 className="absolute bottom-4 left-4 hidden text-white-100 group-hover:block">
              {GalleryImages[5].image_alt}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
