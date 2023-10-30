import Client from '@/Layouts/Client'
import HomeLanding from '@/components/Clinet/landing/homeLanding'

export default function Home () {
  const data = 12131
  return (
      <Client>
          <HomeLanding/>
          <main className='container mx-auto'>
              <h1>ini home {data}</h1>
          </main>
      </Client>

  )
}
