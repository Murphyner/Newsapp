import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function PublicLayout() {
  return (
    <div className='back pb-1'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayout
