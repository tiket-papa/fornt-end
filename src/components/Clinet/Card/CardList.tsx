'use client'
import { integerFormaterId } from '@/utilities/integerFormater'
import { priceFormaterID } from '@/utilities/priceFormater'
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function CardList (
  { data }: {
    data: {
      id: number
      name: string
      image: string
      rating: number
      location: string
      review: number
      price: number }
  }) {
  const stars: any[] = []

  for (let i = 1; i < data.rating; i++) {
    const StarIcon = <FontAwesomeIcon icon={faStar} className='text-main-color' />
    stars.push(StarIcon)
  }

  return (
      <>
          <div className="cursor-pointer drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)] w-full rounded-2xl bg-white overflow-hidden">
              <div className="md:h-36 h-20 relative">
                  <Image
                      src={data.image}
                      alt={data.name}
                      className='object-cover'
                      fill={true}
                      sizes="500px"
                />
              </div>

              <div className="px-2 py-2">
                  <h1 className='font-bold text-base md:text-2xl'>{data.name}</h1>
                  <div className="flex gap-2 text-xs md:text-sm text-gray-600">
                      <p className='font-semibold'>{data.rating}<span className='font-normal'>/5</span> </p>
                      {stars.map((star: any, index: number) => (
                          <span key={index} className='pe-[1px]'>{star}</span>
                      )) }
                  </div>
                  <div className="flex text-[8px] md:text-[12px] text-gray-600 gap-1 items-center mb-5 md:mb-16">
                      <p>({integerFormaterId(data.review)} reviews)</p>
                      <FontAwesomeIcon icon={faCircle} className='text-[4px]' />
                      <p>{data.location}</p>
                  </div>
                  <span className='block text-gray-600 text-sm md:text-base'>mulai dari</span>
                  <span className=' text-red-500 font-bold text-base md:text-2xl'>{priceFormaterID(data.price)}</span>
              </div>

          </div>
      </>
  )
}
