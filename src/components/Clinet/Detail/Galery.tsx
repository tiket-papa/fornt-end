import Image from 'next/image'
import Link from 'next/link'

export default function GalaryComponet ({ data }: { data: {
  idWisata: number
} }) {
  const image = [
    '/storage/images/image1.jpg',
    '/storage/images/image2.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image3.jpg',
    '/storage/images/image4.jpg'
  ]
  return (
      <section id="galery">
          <div className=" flex justify-between items-center">
              <p className="font-bold text-2xl pt-5 pb-3">Galery</p>
              <Link href={'#'} className='px-2 py-1 border border-gray-500 rounded' >see more..</Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 px-3">
              {image.map((item, index) => (
                  <div key={index} className="w-full aspect-square relative">
                      <Image
                          src={item}
                          alt={item}
                          fill
                          className='rounded-md'
                          sizes='200px'
                    />
                  </div>
              ))}
          </div>
      </section>
  )
}
