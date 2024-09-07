import React from 'react'
import { useGetAllNewsQuery } from '../store/api'
import { Link } from 'react-router-dom'

function FooterNews() {
    const { data } = useGetAllNewsQuery()





    return (
        <div className='w-[100%] mx-auto md:px-3'>
            <div className='flex flex-col sm:flex-row mx-5 md:mx-0 sm:items-start justify-between py-10 border-b-[1px] border-white border-opacity-20'>
                <div className='py-3 w-[80%] sm:w-[30%]'>
                    <h2 className='text-xl text-white font-mono opacity-75'>Popular articles</h2>
                    {data?.slice(10, 15).map((item, i) =>
                        <Link to={item._id} className='text-white py-1' key={i}>
                            <p className='cursor-pointer hover:text-colorCustom2 pb-1 opacity-70 text-[13px] hover:opacity-100 transition-all duration-300'>{item.title} ...</p>
                            <span className='text-[13px] tracking-tighter opacity-70'>June 31 ,2024</span>
                        </Link>
                    )}
                </div>
                <div className='py-3 w-[80%] sm:w-[30%]'>
                    <h2 className='text-xl text-white font-mono opacity-75'>Featured</h2>
                    {data?.slice(5, 10).map((item, i) =>
                        <Link to={item._id} className='text-white py-1' key={i}>
                            <p className='cursor-pointer hover:text-colorCustom2 pb-1 opacity-70 text-[13px] hover:opacity-100 transition-all duration-300'>{item.title} ...</p>
                            <span className='text-[13px] tracking-tighter opacity-70'>June 31 ,2024</span>
                        </Link>
                    )}
                </div>
                <div className='py-3 w-full sm:w-[30%]'>
                    <h2 className='text-xl text-white  font-mono opacity-75'>Newsletter</h2>
                    <p className='opacity-70 text-[13px] text-white'>Subscribe to get the latest news, offers and special announcements.</p>
                    <input type="text" className='bg-black placeholder-white  placeholder-opacity-50 border-[1px] rounded-md border-white border-opacity-30 w-full p-2 mt-5' placeholder='Your email address' />
                    <button className='text-white text-sm py-3 tracking-tight text-center w-full bg-neutral-900 rounded hover:bg-colorCustom2 transition-all duration-300 bg-opacity-75 mt-3'>Subscribe</button>
                    <p className='text-[12px] text-white tracking-tighter opacity-40  pt-2'>By subscribing, you're accepting to receive promotions.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterNews
