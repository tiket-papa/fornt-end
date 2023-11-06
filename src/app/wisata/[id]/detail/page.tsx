import Client from '@/Layouts/Client'
import DetailLanding from '@/components/Clinet/landing/detailLanding'
import { dataWisata } from '../../page'
import DetailNav from '@/components/Clinet/Detail/Nav'
import MainComponent from '@/components/Clinet/Detail/MainComponent'

// fake data
const data = dataWisata
export default function DetailWisata ({ params }: { params: { id: string } }) {
  const id = params.id

  const getDataId = (id: number) => {
    return data.find(item => item.id === id)
  }

  const dataById = getDataId(parseInt(id))
  if (dataById === undefined) {
    return <h1>404 - Page Not Found</h1>
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
              <h1>ini  detail {dataById?.name}</h1>
              <DetailNav/>
              <MainComponent data={dataById} />
          </main>
      </Client>
  )
}
