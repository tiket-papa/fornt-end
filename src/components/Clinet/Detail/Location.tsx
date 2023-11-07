import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function LocationComponent ({ data }: { data: {
  name: string
  location: string
  range: number
} }) {
  const origin = 'Bandar+Lampung+Lampung'
  return (
      <>
          <p className="font-bold text-2xl pt-5 ">Lokasi</p>
          <div id='kolasi' className="flex gap-5 pt-4 px-3 justify-start items-end">
              <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${data.location}`} className="p-5 rounded-2xl w-fit border border-gray-200">
                  <div className="w-12 h-12 relative">
                      <Image
                          src={'/icons/maps-icon.png'}
                          alt="maps-icon"
                          fill
                          sizes='500px'
                          className='object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.20)]'
                    />
                  </div>
              </a>
              <div className="flex flex-col justify-end items-start">
                  <p className='font-bold text-3xl pb-5'>{data.name}</p>
                  <div className="flex gap-5 items-center text-gray-500">
                      <FontAwesomeIcon icon={faCircle} className='text-sm'/>
                      <p className='font-bold'>{data.range}Km</p>
                      <p>dari Bandar Lampung</p>
                  </div>
              </div>
          </div>
          <div className='border-b pt-4'></div>
      </>
  )
}
