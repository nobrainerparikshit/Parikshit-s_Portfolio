import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center">
      <div className="site-container w-full pt-10 sm:pt-12 pb-16 sm:pb-20">
        <Header />
        <Nav />
        <main className="pt-8 sm:pt-10 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
