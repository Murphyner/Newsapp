import { useState } from "react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useDisLikeNewsMutation, useLikeNewsMutation } from "../store/api";

function NewsCard({item}) {
    const [like, setLike] = useState(null)
    const [disLike , setDisLike] = useState(null)
    const [likeNews] = useLikeNewsMutation()
    const[disLikeNews] = useDisLikeNewsMutation()
    const [hasLiked , setHasLiked] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false);
    const [hasDisliked , setHasDisliked] = useState(false)


    async function handleLike(id, item) {
        if (!hasLiked && !isProcessing && !hasDisliked) {
            setIsProcessing(true);  
            await likeNews(id).then(() => {
                setLike(like ? like + 1 : item.like + 1)
                setHasLiked(true);  
            }).finally(() => {
                setIsProcessing(false); 
            });
        }
    }
    async function handleDislike(id , item){
        if (!hasDisliked && !isProcessing && !hasLiked) {
            setIsProcessing(true);
            await disLikeNews(id).then(() => {
                setDisLike(disLike ? disLike + 1 : item.dislike + 1)
                setHasDisliked(true);
            }).finally(() => {
                setIsProcessing(false);
            });
        }
    }
  return (
      <div  className='flex flex-col  gap-5  xl:flex-row  xl:gap-8 w-full lg:w-[48%] py-2'>
          <div className='w-full xl:w-[80%]'>
              <img
                  className='object-cover  min-w-[100%] lg:min-w-[300px] 2xl:min-w-[470px] h-64'
                  src={item.img}
              />
          </div>
          <div className='flex flex-col gap-4 w-full lg:w-[80%]'>
              <Link to={`/news/${item._id}`} className='text-white text-xl line-clamp-3 font mainh  xl:w-[80%] md:w-full opacity-85 font-bold hover:text-colorCustom2 cursor-pointer transition-all duration-300'>{item.title}</Link>
              <div className='flex w-[95%] sm:w-[35%]  lg:w-[60%] xl:w-[85%]   justify-between items-center'>
                  <span className='bg-colorCustom2 text-sm p-1 opacity-85 font-bold'>{item.category_id.name}</span>
                  <span className='text-white font-bold opacity-80'>August 18, 2024</span>
              </div>
              <div className='text-white flex gap-3'>
                  <div className='flex items-center text-lg gap-2'>
                      <IoEye />
                      <span>{item.view}</span>
                  </div>
                  <div className='flex items-center text-lg gap-2'>
                    <button disabled={hasLiked} onClick={() => handleLike(item._id, item)}>
                          <BiSolidLike className={`cursor-pointer ${hasLiked ? 'text-green-600' : ''}`} />
                    </button>
                      <span>{like ? like : item.like}</span>
                  </div>
                  <div className='flex items-center text-lg gap-2'>
                      <button onClick={() => handleDislike(item._id , item)}>
                          <BiSolidDislike className={`cursor-pointer ${hasDisliked ? 'text-red-600' : ''}`} />
                      </button>
                      <span>{disLike ? disLike : item.dislike}</span>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default NewsCard
