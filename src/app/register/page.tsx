import RegisterForm from '@/components/Clinet/Registe/RegisterForm'
import Image from 'next/image'

export default function Refister () {
  const contentImage = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  const logo = '/Statick/image/logo_tiket_papa.png'
  return (
      <main className="h-screen grid grid-cols-2 bg-gray-100">
          <div className="relative p-0 m-0">
              <div className="absolute z-30 rounded-r-3xl shadow-2xl w-full h-full flex justify-center items-center bg-white">
                  <RegisterForm />
              </div>
          </div>
          <div className="relative">
              <div className="absolute w-full h-1/3 top-0 grid grid-cols-5 grid-rows-3 gap-2">
                  <div className="row-span-2 relative">
                      <Image
                          src={contentImage[1]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className="col-span-2  row-span-1 relative">
                      <Image
                          src={contentImage[2]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[0]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className=" row-span-3 relative">
                      <Image
                          src={contentImage[3]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[0]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className="row-span-2 relative">
                      <Image
                          src={contentImage[3]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[2]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className="col-span-2 relative">
                      <Image
                          src={contentImage[2]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>
                  <div className=" relative">
                      <Image
                          src={contentImage[0]}
                          alt="image 1"
                          fill
                          className='object-cover'
                          sizes="500px"
                    />
                  </div>

              </div>
              <div className="absolute w-full z-10 h-full backdrop-filter backdrop-blur-[2px]"></div>

              <div className="absolute z-20 w-full h-[70vh] bottom-10 flex px-10 gap-5 flex-col justify-center items-center">
                  <div className="h-20 w-full relative">
                      <Image
                          src={logo}
                          alt='logo tiket papa'
                          className='object-contain'
                          fill={true}
                          sizes='500px'
                    />

                  </div>
                  <p className="font-bold text-3xl text-main-color text-center">Pesan Tiket Wisatamu dan Mulai Petualangan !!</p>
                  <p className='font-semibold text-gray-500'>Daftarkan email anda untuk mulai memesan tiket wisata</p>
              </div>
          </div>
      </main>
  )
}
