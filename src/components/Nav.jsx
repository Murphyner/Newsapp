import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { useGetAllCategoriesQuery, useGetAllNewsQuery, useGetCatNewsQuery } from '../store/api';
import Nav2 from './Nav2';

function Nav() {
    const { data: dataAll } = useGetAllNewsQuery();
    const { data: data2 } = useGetAllCategoriesQuery();
    const { data: dataPol } = useGetCatNewsQuery('66bf4abf71bd9eb73a882522');
    const { data: dataSoc } = useGetCatNewsQuery('66bf4ab671bd9eb73a88251e');
    const { data: dataSport } = useGetCatNewsQuery('66bf4ac971bd9eb73a882527');
    const { data: dataGundem } = useGetCatNewsQuery('66bf4adb71bd9eb73a88252b');
    const { data: dataEco } = useGetCatNewsQuery('66bf4b3b190bde5774a51d9a');
    const { data: dataWorld } = useGetCatNewsQuery('66d299353b78a8895ecc9dad');
    const [show , setShow] = useState(false)

    return (
        <div className='container  flex justify-center mx-auto absolute z-20 left-0 right-0'>
            <nav className='w-full flex justify-between items-center text-white font-mono pt-4 px-3'>
                <Link to={'/'}>
                    <h2 className='text-2xl flex items-center gap-2'>Black <span className='text-base opacity-50'>Pro</span></h2>
                </Link>
                <ul className='hidden md:flex justify-between text-sm lg:text-base  w-[70%] lg:w-[60%] xl:w-[50%] filters'>
                    <li className='cursor-pointer relative group'>
                        <Link to={'allnews'}>All News</Link>
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        <div className='w-[80%]  left-0 right-0 p-5 mx-5 h-0 z-50 fixed hidden group-hover:flex justify-center bg-black overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300 opacity-0 group-hover:opacity-100'>
                            <div className='flex gap-4'>
                                {dataAll?.slice(1, 9).map((item, i) => (
                                    <div key={i} className='cursor-pointer group'>
                                        <Link to={`/detail/${item._id}`}><img className='w-[100px] h-[100px] mb-3 object-cover hover:scale-125 transition-all duration-300' key={i} src={item.img} alt={`image-${i}`} /></Link>
                                        <span className='text-sm opacity-50   font-serif leading-tight'>{item.title}</span>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className='cursor-pointer relative group'>
                        <Link to={'category/66bf4ab671bd9eb73a88251e'}>Cəmiyyət</Link>
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        <div className='w-[45%] left-0 right-0 p-5 mx-auto h-0 z-50 fixed hidden group-hover:flex justify-center bg-black overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300 opacity-0 group-hover:opacity-100'>
                            <div className='flex gap-5'>
                                {dataSoc?.map((item, i) => (
                                    <div key={i} className='cursor-pointer group w-[22%]'>
                                        <Link to={`/detail/${item._id}`}><img className='w-[100px] h-[100px] mb-3 object-cover hover:scale-125 transition-all duration-300' key={i} src={item.img} alt={`image-${i}`} /></Link>
                                        <span className='text-sm opacity-50   font-serif leading-tight'>{item.title}</span>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className='cursor-pointer relative group'>
                        <Link to={'category/66bf4abf71bd9eb73a882522'}>Siyasət</Link>
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        <div className='w-[45%] left-0 mx-auto right-0 p-5 h-0 z-50 fixed hidden  group-hover:flex justify-center bg-black overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300 opacity-0 group-hover:opacity-100'>
                            <div className='flex justify-between'>
                                {dataPol?.map((item, i) => (
                                    <div key={i} className='cursor-pointer group w-[20%]'>
                                        <Link to={`/detail/${item._id}`}><img className='w-[100px] h-[100px] mb-3 object-cover hover:scale-125 transition-all duration-300' key={i} src={item.img} alt={`image-${i}`} /></Link>
                                        <p className='text-sm opacity-50   font-serif  leading-tight'>{item.title}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className='cursor-pointer relative group'>
                        <Link to={'category/66bf4ac971bd9eb73a882527'}>İdman</Link>
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        <div className='w-[35%] left-0 mx-auto right-0 p-5 h-0 z-50 fixed hidden  group-hover:flex justify-center bg-black overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300 opacity-0 group-hover:opacity-100'>
                            <div className='flex justify-between'>
                                {dataSport?.map((item, i) => (
                                    <div key={i} className='cursor-pointer group w-[30%]'>
                                        <Link to={`/detail/${item._id}`}><img className='w-[100px] h-[100px] mb-3 object-cover hover:scale-125 transition-all duration-300' key={i} src={item.img} alt={`image-${i}`} /></Link>
                                        <p className='text-sm opacity-50   font-serif  leading-tight'>{item.title}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className='cursor-pointer relative group'>
                        <Link to={'category/66bf4adb71bd9eb73a88252b'}>Gündəm</Link>
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        <div className='w-[20%] left-0 mx-auto right-0 p-5 h-0 z-50 fixed hidden group-hover:flex justify-center bg-black overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300 opacity-0 group-hover:opacity-100'>
                            <div className='flex justify-between'>
                                {dataGundem?.map((item, i) => (
                                    <div key={i} className='cursor-pointer group w-[40%]'>
                                        <Link to={`/detail/${item._id}`}><img className='w-[100px] h-[100px] mb-3 object-cover hover:scale-125 transition-all duration-300' key={i} src={item.img} alt={`image-${i}`} /></Link>
                                        <p className='text-sm opacity-50   font-serif  leading-tight'>{item.title}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className='cursor-pointer relative group'>
                        <Link to={'category/66bf4b3b190bde5774a51d9a'}>İqtisadiyyat</Link>
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        <div className='w-[35%] left-0 mx-auto right-0 p-5 h-0 z-50 fixed hidden group-hover:flex justify-center bg-black overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300 opacity-0 group-hover:opacity-100'>
                            <div className='flex justify-between'>
                                {dataEco?.map((item, i) => (
                                    <div key={i} className='cursor-pointer group w-[30%]'>
                                        <Link to={`/detail/${item._id}`}><img className='w-[100px] h-[100px] mb-3 object-cover hover:scale-125 transition-all duration-300' key={i} src={item.img} alt={`image-${i}`} /></Link>
                                        <p className='text-sm opacity-50   font-serif  leading-tight'>{item.title}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className='cursor-pointer relative group'>
                        <Link to={'category/66d299353b78a8895ecc9dad'}>Dunya</Link>
                        <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                        <div className='w-[35%]  right-[250px] p-5 h-0 z-50 fixed hidden group-hover:flex justify-center bg-black overflow-hidden group-hover:h-auto group-hover:overflow-visible transition-all duration-300 opacity-0 group-hover:opacity-100'>
                            <div className='flex justify-between'>
                                {dataWorld?.map((item, i) => (
                                    <div key={i} className='cursor-pointer group w-[30%]'>
                                        <Link to={`/detail/${item._id}`}><img className='w-[100px] h-[100px] mb-3 object-cover hover:scale-125 transition-all duration-300' key={i} src={item.img} alt={`image-${i}`} /></Link>
                                        <p className='text-sm opacity-50   font-serif  leading-tight'>{item.title}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className='text-white opacity-60 hidden md:flex justify-between w-[10%]'>
                    <li><Link><FaFacebookF /></Link></li>
                    <li><Link><FaInstagram /></Link></li>
                    <li><Link><FaTwitter /></Link></li>
                </ul>
                <div className='flex md:hidden text-3xl' onClick={() => setShow(true)}>
                    <RxHamburgerMenu />
                </div>
            </nav>
            <Nav2 setShow={setShow} show={show} />
        </div>
    )
}

export default Nav;
