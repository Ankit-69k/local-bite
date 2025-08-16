import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'


type LayoutProps = {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>

      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout