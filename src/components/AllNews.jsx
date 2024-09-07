import { useGetAllNewsQuery} from '../store/api'
import { PiNewspaperClippingBold } from "react-icons/pi";
import { useState } from 'react';
import NewsCard from './NewsCard';





function AllNews() {
    const { data } = useGetAllNewsQuery()
    const [sliceRange, setSliceRange] = useState({ s: 1, e: 5 })
 


   
    
    function handleChange(){
        setSliceRange(prevState => ({
            e: prevState.e + 5
        }))
    }

  return (
    <div className='flex flex-col gap-5 py-10 px-5 page'>
        <div className='text-white flex items-center gap-3  hover:text-colorCustom2 transition-all duration-300'>
            <PiNewspaperClippingBold className='text-3xl' />
            <h2 className='font-bold text-xl'>All News</h2>
        </div>
        <div className='w-full flex flex-col lg:flex-row flex-wrap gap-2'>
              {data?.slice(sliceRange.s, sliceRange.e).map((item, i) => { 
                return <NewsCard key={i} item={item} />})}
    </div> 
          <button onClick={handleChange} className='text-white font-bold hover:text-colorCustom2 transition-all duration-300 border-[1px] hover:border-colorCustom2 opacity-65 hover:opacity-100 mx-auto rounded-md py-2 w-[100px]'>Load more...</button>
    </div>
  )
}

export default AllNews
