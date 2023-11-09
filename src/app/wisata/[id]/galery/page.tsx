import Client from '@/Layouts/Client'
import HomeLanding from '@/components/Clinet/landing/homeLanding'

export default function galery ({ params }: { params: { id: string } }) {
  return (
      <Client>
          <HomeLanding/>
          <main className=' container mx-auto px-3'>
              ini page galery untuk wisata {params.id}
          </main>
      </Client>
  )
}
