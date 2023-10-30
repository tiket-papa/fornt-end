import Link from 'next/link'
import Image from 'next/image'
import BtnLink from '../../Button'

export default function NavAdim () {
  const logo = '/Statick/image/logo_tiket_papa.png'

  return (
      <nav className="container mx-auto flex  justify-between items-center py-3 px-2">
          <Link href={'https://nextjs.org/docs/api-reference/next/link#with-url-object'}>
              <Image
                  src={logo}
                  alt='logo tiket papa'
                  className='drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] '
                  width={200}
                  height={0}
                  priority
                />
          </Link>

          <ul className='flex gap-10 items-center text-text-color font-semibold'>
              <li>
                  <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]' href={'/'}>Bernada </Link>
              </li>
              <li>
                  <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'href={'/wisata'}>Pariwisata</Link>
              </li>
              <li>
                  <button className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>
                      <span>Type Wisata</span>
                  </button>
              </li>
              <li className='flex gap-5 items-center'>
                  <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]' href={'/'}>Masuk</Link>
                  <BtnLink text='Daftar' target={'/'}/>
              </li>
          </ul>
      </nav>
  )
}
