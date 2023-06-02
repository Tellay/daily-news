import { New } from './new'

export function InterestingNews() {
  const News = [
    {
      link: 'https://education.nationalgeographic.org/resource/endangered-species/',
      img: {
        path: '/AnimalEndangerment.jpg',
        alt: 'Example image of a giant panda',
        width: 4290,
        height: 2856,
      },
      title: "What Are the World's Most Endangered Animal Species",
      views: '10.1k',
      likes: '3.7k',
      dislikes: '1.4k',
      author: 'Lucas Mitchell',
      createdAt: 'May 5, 2023',
    },

    {
      link: 'https://education.nationalgeographic.org/resource/endangered-species/',
      img: {
        path: '/SoilPollution.jpg',
        alt: 'Example image of a cigarette on the soil',
        width: 4032,
        height: 3024,
      },
      title: 'Soil Pollution: What is it? Effects? Solutions?',
      views: '5k',
      likes: '2.1k',
      dislikes: '1.6k',
      author: 'Amelia Turner',
      createdAt: 'January 18, 2023',
    },

    {
      link: 'https://education.nationalgeographic.org/resource/endangered-species/',
      img: {
        path: '/Deforestation.jpg',
        alt: 'Example image of deforestation',
        width: 4298,
        height: 2865,
      },
      title: 'Brazil’s Amazon Florest Continues Being Deforested',
      views: '10.1k',
      likes: '3.7k',
      dislikes: '1.4k',
      author: 'Marcus Bennett',
      createdAt: 'October 19, 2023',
    },

    {
      link: 'https://education.nationalgeographic.org/resource/endangered-species/',
      img: {
        path: '/WaterPollution.jpg',
        alt: 'Example image of water pollution',
        width: 4032,
        height: 3024,
      },
      title:
        'Ripples of Destruction: Unveiling the Silent Menace of Water Pollution',
      views: '5.4k',
      likes: '1.2k',
      dislikes: '1k',
      author: 'Olivia Sanchez',
      createdAt: 'November 28, 2023',
    },

    {
      link: 'https://education.nationalgeographic.org/resource/endangered-species/',
      img: {
        path: '/ClimateChange.jpg',
        alt: 'Example image of climate change',
        width: 5760,
        height: 3840,
      },
      title: 'Life on the Edge: Exploring The Impacts of Climate Change',
      views: '9.1k',
      likes: '8.8k',
      dislikes: '0',
      author: 'Ethan Reynolds',
      createdAt: 'February 12, 2023',
    },

    {
      link: 'https://education.nationalgeographic.org/resource/endangered-species/',
      img: {
        path: '/Overpopulation.jpg',
        alt: 'Example image of overpopulation',
        width: 3603,
        height: 2500,
      },
      title: 'India Is Now the World’s Most Populous Country',
      views: '7.9k',
      likes: '6.3k',
      dislikes: '2.3k',
      author: 'Ava Peterson',
      createdAt: 'April 25, 2023',
    },
  ]

  return (
    <div className="border-b border-gray-100 py-9">
      {/* <h2 className="relative w-fit font-alt text-2xl font-bold">
        News that may interest you
        <span className="absolute inset-x-0 bottom-0 left-0 -z-10 h-3 bg-pink-100" />
      </h2> */}

      <h2 className="font-alt text-2xl font-bold underline decoration-pink-100 decoration-4">
        News that may interest you
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {News.map((news) => (
          <New key={news.title} {...news} />
        ))}
      </div>
    </div>
  )
}
