import FooterClient from '@/components/Clinet/Footer/Footer'
import NavClient from '@/components/Clinet/Nav/Nav'

export default function Client ({ children }: { children: React.ReactNode }) {
  return (
      <>
          <header className='container mx-auto'>
              <NavClient/>
          </header>
          {children}
          <FooterClient/>
      </>
  )
}
