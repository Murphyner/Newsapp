import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function DashboardSide() {
  return (
    <div className='min-h-screen p-6 sm:p-4 md:p-6 lg:p-8 shadow-custom2'>
      <div className='border-b-[1px] pb-4'>
        <Link to={'/admin'} className='text-lg uppercase text-colorCustom block sm:text-sm md:text-lg lg:text-xl'>
          Agshin Mustafazade
        </Link>
      </div>
      <div className='pt-3'>
        <ul className='text-white flex flex-col gap-5'>
          <Link
            to={'news'}
            className='bg-colorCustom bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 p-2 rounded-md cursor-pointer flex items-center gap-2 sm:text-sm md:text-base lg:text-lg'
          >
            <RiDashboardFill className='text-xl' />
            All News
          </Link>
          <Link
            to={'categories'}
            className='bg-colorCustom bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 p-2 rounded-md cursor-pointer flex items-center gap-2 sm:text-sm md:text-base lg:text-lg'
          >
            <RiDashboardFill className='text-xl' />
            All Categories
          </Link>
          <Link
            to={'addnews'}
            className='bg-colorCustom bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 p-2 rounded-md cursor-pointer flex items-center gap-2 sm:text-sm md:text-base lg:text-lg'
          >
            <RiDashboardFill className='text-xl' />
            Add News
          </Link>
          <Link
            to={'addcategory'}
            className='bg-colorCustom bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 p-2 rounded-md cursor-pointer flex items-center gap-2 sm:text-sm md:text-base lg:text-lg'
          >
            <RiDashboardFill className='text-xl' />
            Add Category
          </Link>
          <Link
            className='bg-colorCustom bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 p-2 rounded-md cursor-pointer flex items-center gap-2 sm:text-sm md:text-base lg:text-lg'
          >
            <RiDashboardFill className='text-xl' />
            Add User
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default DashboardSide;
