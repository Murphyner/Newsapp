import React, { useEffect, useState } from 'react'
import { useGetPagNewsQuery } from '../store/api'
import Loader from '../components/Loading'
import NewsCard from '../components/NewsCard'

function AllNewsPage() {
  const [page , setPage] = useState(1)
  const { data, isLoading } = useGetPagNewsQuery(page)
  const [maindata ,setMaindata] = useState([])


  function handleScroll() {
    const appHeight = document.querySelector('header')?.offsetHeight || 0; 
    const pageHeight = document.querySelector('.page')?.offsetHeight || 0;
    const totalHeight = appHeight + pageHeight; 
    if (window.scrollY >= totalHeight - 320) {
      setPage(page + 1);
    }
  }
  useEffect(() => {
    if (data) {
      setMaindata(prevData => [...(prevData || []), ...data]);
    }
  }, [data]);
  
  useEffect(() => {
    window.addEventListener('scroll' , handleScroll)

    return () => {
      window.removeEventListener('scroll' , handleScroll)
    }
  },[])
  return (
    <div className='text-white container mx-auto px-5 py-10 page'>
      <div className='flex flex-wrap'>
          {isLoading ? <Loader /> : maindata?.map((item, i) => <NewsCard key={i} item={item} />)}
      </div>
    </div>
  )
}

export default AllNewsPage
