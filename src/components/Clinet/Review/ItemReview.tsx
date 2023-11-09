import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function ItemReviewComponent ({ data }:
{ data: {
  name: string
  profile: string
  rating: number
  review: string
  date: Date
  image?: string[]
}
}) {
  let content = null
  if (data.image != null) {
    content = <>
        {data.image.map((item: any, index: number) => (
            <div className="w-14 h-14 relative" key={index}>
                <Image
                    src={item}
                    alt='fake gambar'
                    fill
                    sizes='100px'
              />
            </div>
        ))}
    </>
  } else {
    content = <></>
  }

  const stars = []

  for (let i = 1; i <= data.rating; i++) {
    const StarIcon = <FontAwesomeIcon icon={faStar} className='text-main-color' />
    stars.push(StarIcon)
  }
  return (
      <>
          <div className="px-3 pt-2">
              <div className="">
                  <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative">
                          <Image
                              src={data.profile}
                              alt={data.name}
                              fill
                              sizes="100px"
                          />
                      </div>
                      <span className='font-bold text-xl text-gray-600'>{data.name}</span>
                  </div>
                  <div className='flex gap-2 pt-3'>{content}</div>
                  <p className='text-lg text-gray-500 pt-4 pb-2'>{data.review}</p>

              </div>
              <div className="flex justify-end items-end">
                  {stars.map((star: any, index: number) => (
                      <span key={index} className='pe-[2px] text-lg'>{star}</span>
                  ))}
                  <p className='ps-2 text-sm text-gray-500 font-semibold'>{data.date.toLocaleString(undefined, { month: 'long', year: 'numeric' })}</p>
              </div>
          </div>
      </>
  )
}
