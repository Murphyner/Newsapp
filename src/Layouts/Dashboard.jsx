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
    <div className='w-full flex justify-between min-h-screen gap-2'>
      <DashboardSide />
      <div className='w-full md:w-[80%] pt-6 flex flex-col gap-1'>
        <nav className='flex flex-col md:flex-row justify-between items-center pr-5 px-3 md:px-0'>
          <h3 className='font-thin text-xl sm:text-2xl md:text-3xl text-colorCustom'>Dashboard</h3>
          <div className='flex justify-between items-center w-full sm:w-[80%] md:w-[70%] lg:w-[47%] mt-4 md:mt-0'>
            {/* Search Bar */}
            <div className='relative group hidden sm:block w-[60%] md:w-full'>
              <input
                type="text"
                placeholder='Search...'
                className='border-b-[1px] w-full p-2 outline-none'
              />
              <div className='absolute bg-colorCustom w-full h-[2px] scale-x-0 ease-in-out group-hover:scale-x-100  transition-all duration-500'></div>
              <IoSearchOutline className='absolute right-0 text-xl md:text-2xl top-2' />
            </div>

            {/* Notification and Profile Icons */}
            <div className='flex justify-between gap-3 items-center'>
              <IoMdNotifications className='text-xl md:text-3xl cursor-pointer' />
              <IoPerson className='text-xl md:text-3xl cursor-pointer' />
            </div>

            {/* Log Out Button */}
            <button
              onClick={logOut}
              className='bg-colorCustom bg-opacity-80 min-w-[70px] md:w-[120px] text-sm md:text-lg p-1 md:p-2 rounded-md text-white transition-all duration-300 hover:bg-opacity-100'
            >
              Log Out
            </button>
          </div>
        </nav>

        {/* Outlet for child routes */}
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardNav;
