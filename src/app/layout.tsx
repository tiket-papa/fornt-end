import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'
import Providers from '@/redux/provider'
// import axios from 'axios'
// axios.defaults.withCredentials = true

const poppins = Poppins({
  subsets: ['latin'], weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Beranda TiketPapa',
  description: 'percayakan tiket wisatamu kepada tiket papa'
}

library.add(fas)

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
          <body className={poppins.className}>
              <Providers >
                  {children}
              </Providers>
          </body>
      </html>
  )
}
