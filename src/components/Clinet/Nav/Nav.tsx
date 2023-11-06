'use client'
import Image from 'next/image'
import Link from 'next/link'
import BtnLink from '../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function NavClient () {
  const [mobileActive, setMobileActive] = useState(false)
  const logo = '/Statick/image/logo_tiket_papa.png'

  const handleNavigation = () => {
    mobileActive ? setMobileActive(false) : setMobileActive(true)
  }

  return (
      <nav className="container mx-auto sticky md:relative top-0 z-20">
          <div className=" flex  justify-between items-center py-3 px-4 bg-white">

              <Link href={'https://nextjs.org/docs/api-reference/next/link#with-url-object'} className=' h-10 w-1/2 relative'>
                  <Image
                      src={logo}
                      alt='logo tiket papa'
                      className='drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] object-contain object-left'
                      sizes='500px'
                      fill

                />
              </Link>
              <button className='md:hidden text-2xl text-gray-700' onClick={ () => { handleNavigation() }}>
                  <FontAwesomeIcon icon={faBars}/>
              </button>

              <ul className=' hidden md:flex gap-10 items-center text-text-color font-semibold'>
                  <li>
                      <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]' href={'/'}>Beranda </Link>
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
          </div>
          <div className={`md:hidden absolute z-10 bg-opacity-30 bg-black w-full min-h-screen ${mobileActive ? 'block' : 'hidden'}`} onClick={() => { handleNavigation() }}>
              <ul className= {`text-text-color font-semibold z-10 absolute md:hidden bg-white w-full px-4 ${mobileActive ? 'block' : 'hidden'}`}>
                  <li className='py-5 flex gap-5 items-center'>
                      <Link className=' drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]' href={'/'}>Masuk</Link>
                      <BtnLink text='Daftar' target={'/'}/>
                  </li>
                  <li className=''>
                      <Link className='py-5 block drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)] hover:bg-main-color' href={'/'}>Beranda </Link>
                  </li>
                  <li className=''>
                      <Link className='py-5 block drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]  hover:bg-main-color'href={'/wisata'}>Pariwisata</Link>
                  </li>
                  <li className='py-5'>
                      <button className='drop-shadow-[0_5px_20px_rgba(0,0,0,0.45)]'>
                          <span>Type Wisata</span>
                      </button>
                  </li>
              </ul>

          </div>
      </nav>
  )
}
