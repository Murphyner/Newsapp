import React, { useEffect, useState } from 'react'
import { useGetAllNewsQuery } from '../store/api'
import { Link } from 'react-router-dom';
import AllNews from './AllNews';
import { FaDownLeftAndUpRightToCenter } from 'react-icons/fa6';
import Weather from './Weather';
import Loader from './Loading';

function Main() {
    const { data , isLoading } = useGetAllNewsQuery()
    console.log(isLoading);
    
    const [city , setCity] = useState('Baku')
    // console.log(data);


    return (
        <div className='container mx-auto'>
            <div className='flex w-full flex-col items-center lg:items-start lg:flex-row'>
                <div className='flex flex-col  gap-5 py-10 px-5 lg:w-[75%] w-full'>
                    {isLoading ? <Loader /> : data?.slice(1, 4).map((item, i) => {
                        return (
                            <div key={i} className='flex flex-col  md:flex-row gap-5 lg:gap-8  md:w-[100%] lg:w-[80%]'>
                                <div className=' w-full md:w-[80%]'>
                                    <img
                                        className='object-cover  min-w-[100%] md:min-w-[300px] h-64'
                                        src={item.img}
                                        alt={`news-${i}`}
                                    />
                                </div>
                                <div className='flex flex-col gap-6  w-full'>
                                    <Link to={`news/${item._id}`} className='text-white text-xl font mainh w-full line-clamp-3 opacity-85 font-bold hover:text-colorCustom2 cursor-pointer transition-all duration-300'>{item.title}</Link>
                                    <div className='flex w-[70%] md:w-full xl:w-[70%] justify-between items-center'>
                                        <span className='bg-colorCustom2 text-sm p-1 opacity-85 font-bold'>{item.category_id.name}</span>
                                        <span className='text-white font-bold opacity-80'>August {i + 1}, 2024</span>
                                    </div>
                                    <p className='text-white line-clamp-3 lg:line-clamp-4 xl:line-clamp-6 opacity-50 font-semibold text-sm w-full'>{item.description}...</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='py-10 w-[70%] lg:w-[25%] px-5 flex flex-col gap-5'>
                    <div className='w-full'>
                        <input type="text" onChange={(e) => setCity(e.target.value)} placeholder='Search' className='bg-black w-full text-white border-white border-[1px] border-opacity-35 rounded-md px-5 py-2' />
                    </div>
                    <Weather city={city} />
                </div>
            </div>
            
            <AllNews />
        </div>
    )
}

export default Main
