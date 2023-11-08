import Client from '@/Layouts/Client'
import DetailLanding from '@/components/Clinet/landing/detailLanding'
import { dataWisata } from '../../page'
import DetailNav from '@/components/Clinet/Detail/Nav'
import MainComponent from '@/components/Clinet/Detail/MainComponent'
import LocationComponent from '@/components/Clinet/Detail/Location'
import { faCampground, faLandmark, faMusic, faToilet, faUmbrellaBeach, faUtensils } from '@fortawesome/free-solid-svg-icons'
import CardItemList from '@/components/Clinet/Card/CardItemList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReviewComponent from '@/components/Clinet/Detail/Review'

// fake data
const data = dataWisata

const datafasilitas = [
  {
    name: 'Beach View',
    icon: faUmbrellaBeach
  },
  {
    name: 'Gazebo',
    icon: faLandmark
  },
  {
    name: 'Toilet',
    icon: faToilet
  },
  {
    name: 'kantin',
    icon: faUtensils
  },
  {
    name: 'Tenda',
    icon: faCampground
  },
  {
    name: 'Music',
    icon: faMusic
  }
]

const dataPublickFasility = [
  {
    name: 'terminal',
    icon: faUmbrellaBeach,
    Range: 23,
    target: '#'
  },
  {
    name: 'terminal',
    icon: faUmbrellaBeach,
    Range: 23,
    target: '#'
  },
  {
    name: 'terminal',
    icon: faUmbrellaBeach,
    Range: 23,
    target: '#'
  },
  {
    name: 'terminal',
    icon: faUmbrellaBeach,
    Range: 23,
    target: '#'
  }
]

export default function DetailWisata ({ params }: { params: { id: string } }) {
  const id = params.id

  const getDataId = (id: number) => {
    return data.find(item => item.id === id)
  }

  const dataById = getDataId(parseInt(id))
  if (dataById === undefined) {
    return <h1>404 - Page Not Found</h1>
  }

  // fake data
  const dataLokation = {
    name: dataById.name,
    location: 'Jl.+Oscar,+Sukarame,+Kec.+Sukarame,+Kota+Bandar+Lampung,+Lampung',
    range: 34
  }

  const contentImage = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  return (
      <Client>
          <DetailLanding images ={contentImage}/>
          <main className="container mx-auto mt-7">
              <DetailNav/>
              <MainComponent data={dataById} />
              <LocationComponent data={dataLokation} />

              <section className='' id='fasilitas'>
                  <p className="font-bold text-2xl pt-5 pb-3 ">Fasilitas</p>
                  <div id='kolasi' className="grid grid-cols-6 gap-6">
                      {datafasilitas.map((item, index) => (
                          <CardItemList key={index} data={undefined} >
                              <FontAwesomeIcon className='text-2xl' icon={item.icon} />
                              <p>{item.name}</p>
                          </CardItemList>
                      ))}

                  </div>
                  <div className='border-b pt-4'></div>
              </section>

              <section className='' id='fasilitas'>
                  <p className="font-bold text-2xl pt-5 pb-3">Fasilitas Publik Terdekat</p>
                  <div id='kolasi' className="grid grid-cols-6 gap-6">
                      {dataPublickFasility.map((item, index) => (
                          <CardItemList key={index} data={{ target: item.target }} >
                              <FontAwesomeIcon className='text-2xl' icon={item.icon} />
                              <div className=''>
                                  <p className='text-sm'>{item.name}</p>
                                  <p className='text-xs'>{item.Range}</p>
                              </div>
                          </CardItemList>
                      ))}

                  </div>
                  <div className='border-b pt-4'></div>
              </section>

              <ReviewComponent data={{ idWisata: dataById.id }} />
          </main>
      </Client>
  )
}
