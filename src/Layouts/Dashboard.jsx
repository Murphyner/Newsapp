import React from 'react'
import { IoSearchOutline, IoPerson } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { Outlet } from 'react-router-dom';
import DashboardSide from '../components/DashboardSide';

function DashboardNav() {
  function logOut() {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className='w-full flex justify-between gap-2'>
      <DashboardSide />
      <div className='w-[80%] pt-6 flex flex-col gap-1'>
        <nav className='flex justify-between pr-5'>
          <h3 className='font-thin text-xl text-colorCustom'>Dashboard</h3>
          <div className='flex justify-between items-center w-[35%]'>
            <div className='relative group'>
              <input type="text" placeholder='Search...' className='border-b-[1px] p-2 outline-none' />
              <div className='absolute bg-colorCustom w-full h-[2px] scale-x-0 ease-in-out group-hover:scale-x-100  transition-all duration-500'></div>
              <IoSearchOutline className='absolute right-0 text-2xl top-2' />
            </div>
            <IoMdNotifications className='text-3xl cursor-pointer' />
            <IoPerson className='text-3xl cursor-pointer ' />
            <button onClick={logOut} className='bg-colorCustom bg-opacity-80 p-2 rounded-md text-white transition-all duration-300 hover:bg-opacity-100'>Log Out</button>
          </div>

        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardNav
