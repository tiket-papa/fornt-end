'use client'
import Client from '@/Layouts/Client'
import BuyerLandingComponent from '@/components/Clinet/landing/BuyerLanding'
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PesanTiket () {
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

              </section>
          </main>
      </Client>
  )
}
