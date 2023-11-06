import BtnLink from '@/components/Button'
import { integerFormaterId } from '@/utilities/integerFormater'
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function MainComponent (
  { data }: {
    data: { id: number
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
  const idrPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2
  }).format(data.price).replace('Rp', 'IDR.')
  return (
      <>
          <div className="flex mt-5 justify-between px-3">
              <div className='flex gap-5'>
                  <div className='p-4 rounded-2xl border border-gray-200 w-fit'>
                      <div className="w-24 h-24 relative rounded-2xl overflow-hidden drop-shadow-[0_0_10px_rgba(0,0,0,0.30)]">
                          <Image
                              src={data.image}
                              alt={data.name}
                              className='object-cover'
                              fill
                              sizes='500px'
                          />
                      </div>
                  </div>
                  <div className="flex flex-col justify-end gap-2">
                      <div className="flex gap-2 text-2xl text-gray-600">
                          {stars.map((star: any, index: number) => (
                              <span key={index} className='pe-[1px]'>{star}</span>
                          )) }
                      </div>
                      <p className='text-4xl font-bold'>{data.name}</p>
                      <div className="flex gap-7 items-center text-base text-gray-500">
                          <span><span className='font-bold'>{data.rating}</span>/5</span>
                          <span>({integerFormaterId(data.review)})</span>
                          <FontAwesomeIcon className='text-sm' icon={faCircle} />
                          <span>{data.location}</span>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col justify-end gap-1 items-end text-gray-500">
                  <span className='font-bold'>Mulai Dari</span>
                  <span className='text-3xl text-red-500 font-bold'>{idrPrice}</span>
                  <span className='text-xs'>*sesuai dengan jenis tiket</span>
                  <BtnLink text='Pilih Paket' target={'#'} />
              </div>
          </div>
          <div className='border-b pt-4'></div>
      </>
  )
}
