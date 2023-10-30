import Client from '@/Layouts/Client'
import DetailLanding from '@/components/Clinet/landing/detailLanding'

export default function DetailWisata () {
  const contentImage = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  return (
      <Client>
          <DetailLanding images ={contentImage}/>
          <main className="container mx-auto">
              <h1>ini  detail
              </h1>
          </main>
      </Client>
  )
}
