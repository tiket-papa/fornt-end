import Client from '@/Layouts/Client'
import TiketListComponent from '@/components/Clinet/Tikte/TiketList'
import DetailLanding from '@/components/Clinet/landing/detailLanding'

export default function Tiket ({ params }: { params: { id: string } }) {
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
      name: 'tiket Cammping + tenda',
      parameter: {
        jumlah: 1,
        satuan: 'malam'
      },
      image: '/storage/images/image2.jpg',
      harga: 30000,
      fasilitas: [
        {
          name: 'parkir'
        },
        {
          name: 'gazebo',
          unit: '1 unit'
        }
      ],
      idWisata: params.id
    },
    {
      id: '53e1e187-c4a9-44f9-86e3-480201212d2a',
      name: 'tiket masuk',
      parameter: {
        jumlah: 1,
        satuan: 'motor'
      },
      image: '/storage/images/image2.jpg',
      harga: 30000,
      fasilitas: [
        {
          name: 'parkir'
        },
        {
          name: 'gazebo',
          unit: '1 unit'
        }
      ],
      idWisata: params.id
    }
  ]
  return (
      <Client>
          <DetailLanding images = {contentImage}/>
          <main className='container mx-auto px-3 pt-5'>
              {tiketData.map((item, index) => (
                  <TiketListComponent key={index} data={item}/>
              ))}
          </main>
      </Client>
  )
}
