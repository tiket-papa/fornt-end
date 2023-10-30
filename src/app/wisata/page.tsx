import Client from '@/Layouts/Client'
import ListLanding from '@/components/Clinet/landing/listLanding'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faCode, faUser } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const dataIcon = [
  faCode, faAddressCard, faUser, faTwitter
]

export default function Wisata () {
  return (
      <Client>
          <ListLanding/>
          <main className="container mx-auto">
              <div className="bg-blue-600">
                  <h1>wisata</h1>

                  { dataIcon.map((icon, index) => (
                      <div key={index}>
                          <FontAwesomeIcon icon={icon} className='text-2xl' />
                      </div>
                  ))}
              </div>
          </main>
      </Client>
  )
}
