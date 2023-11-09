import Link from 'next/link'
import ItemReviewComponent from '../Review/ItemReview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { integerFormaterId } from '@/utilities/integerFormater'

export default function ReviewComponent ({ data }: { data: { id: number
  name: string
  image: string
  rating: number
  location: string
  review: number
  price: number } }) {
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
          <div className="flex gap-5 items-center ps-5 py-5 font-bold">
              <FontAwesomeIcon icon={faStar} className='text-main-color text-2xl' />
              <span>{data.rating}</span>
              <FontAwesomeIcon icon={faCircle} className='text-xs'/>
              <span>{integerFormaterId(data.review)} reviews</span>
          </div>
          {dataReviw.map((item, index) => (
              <ItemReviewComponent key={index} data={item} />
          ))}

          <div className='border-b pt-4'></div>
      </section>
  )
}
