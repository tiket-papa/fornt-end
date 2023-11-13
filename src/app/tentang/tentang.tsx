import { Comic_Neue } from 'next/font/google'

const comic = Comic_Neue({
  subsets: ['latin'], weight: ['400', '700']
})

export default function TentangComponent () {
  return (
      <>
          <div className={`${comic.className} px-10 `}> ini Tentang</div>
      </>
  )
}
