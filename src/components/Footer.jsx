import React from 'react'
import SocialMedia from './SocialMedia'
import FooterNews from './FooterNews'
import { Link } from 'react-router-dom'
import { useGetAllCategoriesQuery } from '../store/api'

function Footer() {
    const {data} = useGetAllCategoriesQuery()

    const handleScrollTo = () => {
        const appHeight = document.querySelector('header')?.offsetHeight || 0;
        window.scrollTo({
            top: appHeight,
            behavior: 'smooth',
        });
    };
    return (
        <footer className='bg-black'>
            <div className='container mx-auto '>
                <SocialMedia />
                <FooterNews />
                <div className='container flex justify-center my-10 '>
                    <div className='text-white w-full px-3 lg:px-0  flex flex-col md:flex-row items-center  md:justify-between'>
                        <span className='opacity-50 text-sm'>&#169; Copyright - Newspaper WordPress Theme by TagDiv</span>
                        <ul className='flex justify-between text-sm w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex-wrap '>
                            <li onClick={() => {
                                window.scrollTo({
                                    top: 0 , 
                                    behavior: 'smooth'
                                })
                            }} className='text-colorCustom2'><Link to={'/'}>Home</Link></li>
                            <li onClick={handleScrollTo} className='opacity-50 hover:text-colorCustom2 hover:opacity-100 transition-all duration-300'><Link to={'allNews'}>All News</Link></li>
                            {data?.map((item ,i) => {
                                return <li onClick={handleScrollTo} key={i} className='opacity-50 hover:text-colorCustom2 hover:opacity-100 transition-all duration-300'><Link to={`category/${item._id}`}>{item.name}</Link></li>

                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
