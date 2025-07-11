import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-blue-gray-100'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout