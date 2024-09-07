import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loading';
import NewsCard from '../components/NewsCard';
import { useGetCatNewsQuery } from '../store/api';

function CategoryNews() {
    const {catID} = useParams()
    const {data , isLoading} = useGetCatNewsQuery(catID)
    
  return (
      <div className='text-white container mx-auto px-5 py-10 page'>
          <div className='flex flex-wrap'>
              {isLoading ? <Loader /> : data?.map((item, i) => <NewsCard key={i} item={item} />)}
          </div>
      </div>
  )
}

export default CategoryNews
