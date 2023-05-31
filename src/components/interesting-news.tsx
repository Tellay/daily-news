import { New } from './new'

export function InterestingNews() {
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
        <New
          link="https://greenerideal.com/news/animals/the-worlds-most-endangered-animal-species/"
          img={{
            path: '/AnimalEndangerment2.jpg',
            alt: 'Example image of animal endangerment',
            width: 3603,
            height: 2500,
          }}
          title="Explore the World's Most Endangered Animal Species"
          views="10.1k"
          likes="3.7k"
          dislikes="1.4k"
          author="Rui Pinto"
          createdAt="May 5, 2023"
        />

        <New
          link="https://www.abebooks.co.uk/9783642089688/Soil-Pollution-Ibrahim-Mirsal-3642089682/plp"
          img={{
            path: '/SoilPollution.jpg',
            alt: 'Example image of soil pollution',
            width: 4032,
            height: 3024,
          }}
          title="Soil Pollution: Origin, Monitoring and Remediation"
          views="5k"
          likes="2.1k"
          dislikes="1.6k"
          author="Jacinto Muralha"
          createdAt="January 18, 2023"
        />

        <New
          link="https://www.newsamericasnow.com/brazils-amazon-deforestation-again-hits-record-high-for-february/#:~:text=Satellite%20monitoring%20detected%20322sq%20km%20%28124sq%20miles%29%20of,from%20the%20national%20space%20agency%20released%20on%20Friday."
          img={{
            path: '/Deforestation.jpg',
            alt: 'Example image of deforestation',
            width: 4298,
            height: 2865,
          }}
          title="Brazil’s Amazon deforestation again hits record high for February"
          views="10.1k"
          likes="3.7k"
          dislikes="1.4k"
          author="Rui Pedro"
          createdAt="October 19, 2023"
        />

        <New
          link="https://www.dailysabah.com/turkiye/excessive-pollution-causes-color-change-in-turkiyes-izmir-bay/news"
          img={{
            path: '/WaterPollution.jpg',
            alt: 'Example image of water pollution',
            width: 4032,
            height: 3024,
          }}
          title="Excessive pollution causes color change in Türkiye's Izmir Bay"
          views="5.4k"
          likes="1.2k"
          dislikes="1k"
          author="Michael Jackson"
          createdAt="November 28, 2023"
        />

        <New
          link="https://www.ibtimes.co.uk/climate-change-can-cause-collapse-life-earth-claim-scientists-1716246"
          img={{
            path: '/ClimateChange.jpg',
            alt: 'Example image of climate change',
            width: 5760,
            height: 3840,
          }}
          title="Climate change can cause a collapse of life on earth, claim scientists"
          views="9.1k"
          likes="8.8k"
          dislikes="0"
          author="Fernando Belo"
          createdAt="February 12, 2023"
        />

        <New
          link="https://tribuneonlineng.com/india-overtakes-china-becomes-worlds-most-populous-country/"
          img={{
            path: '/Overpopulation.jpg',
            alt: 'Example image of overpopulation',
            width: 3603,
            height: 2500,
          }}
          title="India overtakes China, becomes world’s most populous country"
          views="7.9k"
          likes="6.3k"
          dislikes="2.3k"
          author="Samir Jamal"
          createdAt="April 25, 2023"
        />
      </div>
    </div>
  )
}
