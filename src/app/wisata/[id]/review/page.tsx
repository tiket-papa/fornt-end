import Client from '@/Layouts/Client'
import ItemReviewComponent from '@/components/Clinet/Review/ItemReview'
import DetailLanding from '@/components/Clinet/landing/detailLanding'

export default function ReveiwPage ({ params }: { params: { id: string } }) {
  const dataReview = [
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date(),
      image: [
        '/storage/images/image1.jpg',
        '/storage/images/image2.jpg',
        '/storage/images/image3.jpg',
        '/storage/images/image4.jpg'
      ]
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date()
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date()
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date(),
      image: [
        '/storage/images/image1.jpg',
        '/storage/images/image2.jpg',
        '/storage/images/image3.jpg',
        '/storage/images/image4.jpg'
      ]
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date(),
      image: [
        '/storage/images/image1.jpg',
        '/storage/images/image2.jpg',
        '/storage/images/image3.jpg',
        '/storage/images/image4.jpg'
      ]
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date(),
      image: [
        '/storage/images/image1.jpg',
        '/storage/images/image2.jpg',
        '/storage/images/image3.jpg',
        '/storage/images/image4.jpg'
      ]
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date(),
      image: [
        '/storage/images/image1.jpg',
        '/storage/images/image2.jpg',
        '/storage/images/image3.jpg',
        '/storage/images/image4.jpg'
      ]
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date(),
      image: [
        '/storage/images/image1.jpg',
        '/storage/images/image2.jpg',
        '/storage/images/image3.jpg',
        '/storage/images/image4.jpg'
      ]
    },
    {
      name: 'pak jojon',
      profile: '/Statick/fake/user-fake.png',
      rating: 5,
      review: 'pantai sangat bagus, bersih, dan fasilitas nyaman',
      date: new Date(),
      image: [
        '/storage/images/image1.jpg',
        '/storage/images/image2.jpg',
        '/storage/images/image3.jpg',
        '/storage/images/image4.jpg'
      ]
    }
  ]
  const contentImage = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  return (
      <Client>
          <DetailLanding images ={contentImage}/>
          <main className="container mx-auto mt-7 px-3 md:px-0">
              <div className="">

              </div>
              {dataReview.map((item, index) => (
                  <ItemReviewComponent key={index} data={item} />
              ))}
          </main>

      </Client>
  )
}
