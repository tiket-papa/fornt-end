import Client from '@/Layouts/Client'
import CardList from '@/components/Clinet/Card/CardList'
import ListLanding from '@/components/Clinet/landing/listLanding'
import Link from 'next/link'

const dataWisata = [
  {
    id: 1,
    name: 'pantai marina',
    image: '/storage/images/image1.jpg',
    rating: 4.9,
    location: 'pesawaran bandar lampung',
    review: 1000,
    price: 100000
  },
  {
    id: 2,
    name: 'pantai marina',
    image: '/storage/images/image1.jpg',
    rating: 4.9,
    location: 'pesawaran bandar lampung',
    review: 1000,
    price: 100000
  },
  {
    id: 3,
    name: 'pantai marina',
    image: '/storage/images/image1.jpg',
    rating: 4.9,
    location: 'pesawaran bandar lampung',
    review: 1000,
    price: 100000
  },
  {
    id: 4,
    name: 'pantai marina',
    image: '/storage/images/image1.jpg',
    rating: 4.9,
    location: 'pesawaran bandar lampung',
    review: 1000,
    price: 100000
  },
  {
    id: 5,
    name: 'pantai marina',
    image: '/storage/images/image1.jpg',
    rating: 4.9,
    location: 'pesawaran bandar lampung',
    review: 1000,
    price: 100000
  }

]

export default function Wisata () {
  //   console.log(dataWisata)
  return (
      <Client>
          <ListLanding/>
          <main className="container mx-auto mt-10 px-3">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5 justify-items-center">
                  { dataWisata.map((data: any, index: number) => (
                      <Link href={`/wisata/${data.id}/detail`} key={index}>
                          <CardList data={data} />
                      </Link>
                  ))}
                  {/* <CardList data={dataWisata[0]} /> */}

              </div>
          </main>
      </Client>
  )
}
