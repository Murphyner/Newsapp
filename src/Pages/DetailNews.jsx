import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetDetailNewsQuery } from '../store/api'

function DetailNews() {
    const {newsID} = useParams()
    const {data} = useGetDetailNewsQuery(newsID)
    const item = data
    
  return (
    <div className='text-white container mx-auto px-5 py-10 page'>
        <div>
            <div className='flex flex-col  gap-5 lg:gap-8  w-full'>
                <div className=' w-full'>
                    <img
                        className='object-cover  min-w-[100%] h-64 md:h-[350px]'
                        src={item?.img}
                    />
                </div>
                <div className='flex flex-col gap-6  w-full'>
                    <Link className='text-white text-xl font mainh w-full line-clamp-3 opacity-85 font-bold hover:text-colorCustom2 cursor-pointer transition-all duration-300'>{item?.title}</Link>
                    <div className='flex w-[70%] md:w-[30%] justify-between items-center'>
                        <span className='bg-colorCustom2 text-sm p-1 opacity-85 font-bold'>{item?.category_id.name}</span>
                        <span className='text-white font-bold opacity-80'>August 18, 2024</span>
                    </div>
                    <p className='text-white line-clamp-3 lg:line-clamp-4 xl:line-clamp-6 opacity-50 font-semibold text-sm w-full'>{item?.description}...</p>
                    <Link to={'/'} className='text-xl cursor-pointer font-semibold hover:bg-colorCustom2 text-center rounded-md transition-all duration-500 border-[1px] border-colorCustom2 w-[60px]'>Back</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailNews
