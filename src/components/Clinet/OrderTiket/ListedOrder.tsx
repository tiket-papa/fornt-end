import { priceFormaterID } from '@/utilities/priceFormater'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListedorderComponent ({ data }: { data: { name: string, qty: number, price: number } }) {
  return (
      <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 w-52">
              <FontAwesomeIcon icon={faCircle} className='text-[10px]' />
              <span>{data.name}</span>
          </div>
          <span>{data.qty}</span>
          <span>{priceFormaterID(data.price)}</span>
      </div>
  )
}
