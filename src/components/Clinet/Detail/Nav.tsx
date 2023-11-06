import Link from 'next/link'

export default function DetailNav () {
  return (
      <>
          <nav className="border-b border-black py-4 px-2">
              <ul className="flex gap-10 items-center text-text-color font-semibold">
                  <li>
                      <Link href={'#info'} className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>Info Umum</Link>
                  </li>
                  <li>
                      <Link href={'#lokasi'} className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>Lokasi</Link>
                  </li>
                  <li>
                      <Link href={'#Fasilitas'} className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>Fasilitas</Link>
                  </li>
                  <li>
                      <Link href={'#FasilitasPublik'} className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>Fasilitas Publik</Link>
                  </li>
                  <li>
                      <Link href={'#Reveiw'} className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>Reveiw</Link>
                  </li>
                  <li>
                      <Link href={'#Galery'} className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>Galery</Link>
                  </li>
              </ul>
          </nav>
      </>
  )
}
