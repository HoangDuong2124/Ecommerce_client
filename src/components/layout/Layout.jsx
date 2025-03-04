import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
const Layout = ({children}) => {
  return (
    <div className='w-screen h-auto'>
       <Header/>
       <div className='w-full h-auto px-[50px]'>{children}</div>
       <Footer/>
    </div>
  )
}

export default Layout