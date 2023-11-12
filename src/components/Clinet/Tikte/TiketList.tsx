'use client'
import BtnLink from '@/components/Button'
import { priceFormaterID } from '@/utilities/priceFormater'
import { faAngleDown, faAngleUp, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'

export default function TiketListComponent ({ data }: {
  data: {
    id: string
    name: string
    parameter: {
      jumlah: number
      satuan: string
    }
    image: string
    harga: number
    fasilitas: any[]
    idWisata: string
  }
}) {
  const [isActiveFasistity, setIsActiveFasistity] = useState(false)

  const handleIsActive = () => {
    isActiveFasistity ? setIsActiveFasistity(false) : setIsActiveFasistity(true)
  }
  return (
      <>
          <div className=" flex justify-between items-end">
              <div className="flex gap-5 items-end">
                  <div className="w-fit h-fit p-3 border border-gray-400 rounded-2xl">
                      <div className="relative w-20 aspect-square rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                          <Image
                              src={data.image}
                              alt={data.name}
                              fill
                              className='object-cover'
                              sizes='200px'
                          />
                      </div>
                  </div>
                  <div className=''>
                      <span className='whitespace-nowrap block text-5xl font-bold pb-3'>{data.name}</span>
                      <span className=''> <span className='font-bold'>{data.parameter.jumlah} {data.parameter.satuan}</span> /Tiket</span>
                  </div>
              </div>

              <div className="flex flex-col gap-1 items-end text-gray-500">
                  <span className='font-semibold text-sm'>mulai dari</span>
                  <span className='font-bold text-red-500 text-xl'>{priceFormaterID(data.harga)}</span>
                  <span className='text-xs'>/tiket</span>
                  <BtnLink text='beli tiket' target={'#'} />
              </div>
          </div>
          <div className="pt-5 flex justify-between text-gray-500">
              <span className='font-bold'>fasilitas</span>
              <button onClick={() => { handleIsActive() }} className=' px-3'>
                  <FontAwesomeIcon icon={isActiveFasistity ? faAngleDown : faAngleUp} />
              </button>
          </div>
          <div className={`${isActiveFasistity ? 'block' : 'hidden'} text-gray-500`}>
              {data.fasilitas.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-5 pt-2">
                          <FontAwesomeIcon icon={faCircle} className='text-xs'/>
                          <span>{item.name}</span>
                      </div>
                      <span>{item.unit}</span>
                  </div>
              ))}
          </div>
          <div className="border-b border-gray-700 w-full mb-5 pt-3"></div>
      </>
  )
}
