import Link from 'next/link'
import ItemReviewComponent from '../Review/ItemReview'

export default function ReviewComponent ({ data }: { data: { idWisata: number } }) {
  const dataReviw = [
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
    }
  ]

  return (
      <section id="reveiw">
          <div className=" flex justify-between items-center">
              <p className="font-bold text-2xl pt-5 pb-3">Reveiw</p>
              <Link href={'#'} className='px-2 py-1 border border-gray-500 rounded' >see more..</Link>
          </div>
          {dataReviw.map((item, index) => (
              <ItemReviewComponent key={index} data={item} />
          ))}

          <div className='border-b pt-4'></div>
      </section>
  )
}
