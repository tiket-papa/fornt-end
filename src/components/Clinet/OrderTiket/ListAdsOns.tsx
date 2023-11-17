import { priceFormaterID } from '@/utilities/priceFormater'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListAdsOnsComponent ({ data }: { data: {
  name: string
  parameter?: {
    jumlah: number
    satuan: string
  }
  price: number
  icon?: IconDefinition
} }) {
  const icon = data.icon ?? faUmbrellaBeach
  return (
      <>
          <div className="flex items-center justify-between py-3 text-gray-500">
              <div className="flex items-center gap-3">
                  <div className="w-fit h-fit p-2 border border-gray-200 rounded-xl">
                      <div className="aspect-square bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                          <FontAwesomeIcon icon={icon} className='text-3xl p-2' />
                      </div>
                  </div>
                  <span className='text-2xl font-bold'>{data.name}</span>
                  <span className='text-sm'>{data.parameter?.jumlah} {data.parameter?.satuan}</span>
                  <span className='text-sm text-red-500'>{priceFormaterID(data.price)}</span>
              </div>

              <div className="flex items-center gap-5">
                  <button className='bg-main-color hover:bg-cyan-700 py-1 px-3 rounded-xl text-white hover:text-gray-400 shadow-md'>
                      <span className='drop-shadow-[0_5px_20px_rgba(0,0,0,1)]'>-</span>
                  </button>
                  <span>1</span>
                  <button className='bg-main-color hover:bg-cyan-700 py-1 px-3 rounded-xl text-white hover:text-gray-400 shadow-md'>
                      <span className='drop-shadow-[0_5px_20px_rgba(0,0,0,1)]'>+</span>
                  </button>
              </div>
          </div>
      </>
  )
}
