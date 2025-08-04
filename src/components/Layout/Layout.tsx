import { ReactNode, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { addScrollAnimations } from '../../lib/utils'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Add scroll animations after component mounts
    const observer = addScrollAnimations()
    
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout 