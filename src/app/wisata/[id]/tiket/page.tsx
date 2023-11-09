import Client from '@/Layouts/Client'
import DetailLanding from '@/components/Clinet/landing/detailLanding'

export default function Tiket ({ params }: { params: { id: string } }) {
  console.log(params.id)

  const contentImage = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]

  // fake data
  const tiketData = [
    {
      id: '53e1e187-c4a9-44f9-86e3-480201212d2a',
      name: 'tiket masuk',
      parameter: 'motor',
      image: '/storage/images/image2.jpg',
      harga: 30000,
      fasilitas: [
        {
          name: 'parkir'
        },
        {
          name: 'gazebo',
          unit: 2
        }
      ],
      idWisata: params.id
    }
  ]
  return (
      <Client>
          <DetailLanding images = {contentImage}/>
          <main className='container mx-auto  pt-5'>
              {tiketData.map((item, index) => (
                  <span key={index}>{item.name}</span>
              ))}
          </main>
      </Client>
  )
}
