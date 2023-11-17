'use client'
import Client from '@/Layouts/Client'
import BtnLink from '@/components/Button'
import ListAdsOnsComponent from '@/components/Clinet/OrderTiket/ListAdsOns'
import ListedorderComponent from '@/components/Clinet/OrderTiket/ListedOrder'
import BuyerLandingComponent from '@/components/Clinet/landing/BuyerLanding'
import { priceFormaterID } from '@/utilities/priceFormater'
import { faCalendar, faClock, faHotdog, faLandmark, faTent } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function PesanTiket () {
  const resultTiket = [
    {
      name: 'tiket masuk',
      qty: 1,
      price: 30000
    },
    {
      name: 'gazebo',
      qty: 1,
      price: 30000
    },
    {
      name: 'tenda',
      qty: 1,
      price: 30000
    },
    {
      name: 'peket makanan',
      qty: 1,
      price: 30000
    }
  ]
  const data = {
    image: '/storage/images/image1.jpg',
    name: 'camping',
    parameter: {
      jumlah: 1,
      satuan: 'orang'
    }

  }

  const adsOns = [
    {
      name: 'Gazebo',
      price: 30000,
      //   parameter: null,
      icon: faLandmark
    },
    {
      name: 'tenda',
      price: 30000,
      //   parameter: null,
      icon: faTent
    },
    {
      name: 'paket makanan',
      parameter: {
        jumlah: 4,
        satuan: 'porsi'
      },
      price: 30000,
      icon: faHotdog
    },
    {
      name: 'paket makanan',
      parameter: {
        jumlah: 4,
        satuan: 'porsi'
      },
      price: 30000
    }
  ]
  return (
      <Client>
          <BuyerLandingComponent />
          <main className='container mx-auto px-3 mt-4'>
              <section className='tiket_dietail text-gray-500'>
                  <div className="grid grid-cols-2 items-center gap-5">
                      <div className="py-3">
                          <label htmlFor="date" className="font-bold">Tanggal Kedatangan</label>
                          <div className="flex gap-4 items-center pt-2">
                              <FontAwesomeIcon icon={faCalendar} />
                              <input type="date" id="date" className={' \'border-gray-200\' block w-full p-2 rounded-lg border  focus:outline-none focus:ring focus:ring-main-color '} />
                          </div>
                          {/* {(error.email !== '') && <p className='text-red-500 ps-10'>{error.email}</p>} */}
                      </div>
                      <div className="py-3">
                          <label htmlFor="date" className="font-bold">Tanggal Kedatangan</label>
                          <div className="flex gap-4 items-center pt-2">
                              <FontAwesomeIcon icon={faClock} />
                              <input type="time" id="date" className={' \'border-gray-200\' block w-full p-2 rounded-lg border  focus:outline-none focus:ring focus:ring-main-color '} />
                          </div>
                          {/* {(error.email !== '') && <p className='text-red-500 ps-10'>{error.email}</p>} */}
                      </div>
                  </div>
              </section>
              <section>
                  <div className="flex justify-between items-center py-3">
                      <div className="flex gap-5 items-center">
                          <div className="w-fit h-fit p-2 border border-gray-300 rounded-2xl">
                              <div className="relative w-16 aspect-square rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
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
                              <span className='whitespace-nowrap block text-3xl font-bold pb-1'>{data.name}</span>
                              <span className='text-sm'> <span className='font-bold'>{data.parameter.jumlah} {data.parameter.satuan}</span> /Tiket</span>
                          </div>
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
                  <div className="w-full border-b mb-3"></div>
              </section>
              <section className='adds-ons'>
                  <p className="font-bold text-2xl pt-5  pb-5">Ads-Ons</p>
                  {adsOns.map((item, index) => (
                      <ListAdsOnsComponent key={index} data={item} />
                  ))}
                  <div className="w-full border-b mb-3"></div>
              </section>

              <section className=' text-gray-500'>
                  <p className="font-bold text-xl pt-5  pb-5">Detail Pesanan</p>
                  {resultTiket.map((item, index) => (
                      <ListedorderComponent data={item} key={index} />
                  ))}
                  <div className="w-full border-b my-3"></div>
                  <div className="flex justify-between items-center ">
                      <div className=""></div>
                      <span>Harga total</span>
                      <span>{priceFormaterID(resultTiket.reduce((total, object) => total + object.price, 0))}</span>
                  </div>
                  <div className="flex justify-end py-5">
                      <BtnLink text='Pesan sekarang' target={'#'} />
                  </div>
              </section>
          </main>
      </Client>
  )
}
