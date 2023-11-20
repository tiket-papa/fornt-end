'use client'
import Client from '@/Layouts/Client'
import BuyerLandingComponent from '@/components/Clinet/landing/BuyerLanding'
import { priceFormaterID } from '@/utilities/priceFormater'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useState } from 'react'

export default function ChosePaymanent () {
  const [paymentMetode, setPaymetMetode] = useState('')
  const [cheked, setCheked] = useState(false)

  const handleChekcBox = () => {
    setCheked(!cheked)
  }

  const paymentMetodeData = [
    {
      name: 'QRIS',
      Image: '/Statick/image/logo/qrisLogo.svg',
      desk: 'Pembayaran melalui semua aplikasi digital (Gopay, OVO, Dana, LinkAja), dan aplikasi Bank yang sudah mendukung Qr Scanner (CIMB Mobile, Permata Mobile)'
    },
    {
      name: 'gopay',
      Image: '/Statick/image/logo/Gopay.png',
      desk: 'pembayaran dapat melalui apilkasi gopay'
    }
  ]
  const name = 'mas jono'
  const timeArive = new Date()
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
  const datail = {
    priceAllTiket: resultTiket.reduce((total, object) => total + object.price, 0),
    layanan: 1000,
    total: function () {
      return this.priceAllTiket + this.layanan
    }
  }
  return (
      <Client>
          <BuyerLandingComponent />
          <main className='container mx-auto px-3 py-5'>
              <div className="grid grid-cols-10 gap-36">
                  <div className="main col-span-6 w-full">
                      <div className="info text-gray-600">
                          <p className='font-bold pb-2'>Detai Pesanan</p>
                          <div className="flex gap-1 items-center">
                              <span className='block w-48'>Nama</span>
                              <span className='block'>: </span>
                              <span className='block'>{name}</span>
                          </div>
                          <div className="flex gap-1 items-center">
                              <span className='block w-48'>Wkatu Kedatangan</span>
                              <span className='block'>: </span>
                              <span className='block'>{timeArive.toLocaleString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                      </div>

                      <table className='w-full border-separate border-spacing-y-2'>
                          <thead className='text-white'>
                              <tr className=''>
                                  <th scope='row' className='text-start py-4 rounded-s-md bg-main-color my-5 w-10'></th>
                                  <th className='text-start py-4  bg-main-color my-5 w-3/5'>produk</th>
                                  <th className='text-center py-4 bg-main-color'>jumlah</th>
                                  <th className='text-end pe-5 py-4 rounded-e-md bg-main-color'>total</th>
                              </tr>
                          </thead>
                          <tbody className='text-gray-600'>
                              {resultTiket.map((item, index) => (
                                  <tr key={index}>
                                      <td className='text-center text-xs py-3 bg-gray-100 rounded-s-md'>
                                          <FontAwesomeIcon icon={faCircle} />
                                      </td>
                                      <td className='text-start py-3 bg-gray-100'>{item.name}</td>
                                      <td className='text-center py-3 bg-gray-100'>{item.qty}</td>
                                      <td className='text-end pe-3 py-3 bg-gray-100'>{priceFormaterID(item.price)}</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                      <div className="w-wull bg-gray-50 flex flex-col items-end p-3 rounded-md shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                          <div className="flex gap-1 items-center">
                              <span className='block w-48'>Harga Tiket</span>
                              <span className='block w-40 text-end'>{priceFormaterID(datail.priceAllTiket)}</span>
                          </div>
                          <div className="flex gap-1 items-center">
                              <span className='block w-48'>Layanan</span>
                              <span className='block w-40 text-end'>{priceFormaterID(datail.layanan)}</span>
                          </div>
                          <div className="flex gap-1 items-center">
                              <span className='block w-48'>Total Harga</span>
                              <span className='block w-40 text-end text-red-500'>{priceFormaterID(datail.total())}</span>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-4 w-full flex flex-col justify-between">
                      <div className="top">
                          <span className='my-3 w-full block text-center bg-main-color hover:bg-cyan-700 py-4 rounded-md text-white hover:text-gray-400 shadow-md font-bold'> pilih pembayaran</span>

                          {paymentMetodeData.map((item, index) => (
                              <div key={index} onClick={() => { setPaymetMetode(item.name) }} className="w-wull my-3 bg-gray-50 p-3 rounded-md shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
                                  <div className=" w-full">
                                      <div className={`${(paymentMetode === item.name) ? 'bg-cyan-300' : ''} w-full rounded-md px-3` }>
                                          <div className={'w-2/3 h-20 aspect-square relative'}>
                                              <Image
                                                  src={item.Image}
                                                  alt={item.name}
                                                  fill
                                                  className='object-contain object-center'
                                                  sizes='500px'
                                        />
                                          </div>
                                      </div>
                                      <p className='text-center text-xs font-light'>{item.desk}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                      <div className="buttom">
                          <div className="w-full border-b-2 mb-7"></div>
                          <div className="w-full border-b-2 mb-3"></div>
                          <div className="flex">
                              <input id="default-checkbox" type="checkbox" checked={cheked} onChange={handleChekcBox} className='w-4 h-4 text-red-600 rounded-2xl focus:ring-red-500 '/>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </Client>
  )
}
