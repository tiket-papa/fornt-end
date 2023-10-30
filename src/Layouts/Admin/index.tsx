import NavClient from '@/components/Clinet/Nav/Nav'

export default function Admin ({ children }: { children: React.ReactNode }) {
  return (
      <>
          <header className='container mx-auto'>
              <NavClient/>
          </header>
          {children}
      </>
  )
}
