import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useGetAllCategoriesQuery } from "../store/api";

function Nav2({setShow , show}) {
  const {data} = useGetAllCategoriesQuery()
    console.log(data);
    
  return (
    <div className={`fixed bg-black block md:hidden text-white h-screen p-8 right-0 z-30 transition-all duration-300 ${show ? 'translate-x-0' : 'translate-x-[100%]'}`}>
      <div className="relative">
        <IoMdClose className="absolute -right-4 text-2xl -top-4" onClick={() => setShow(false)} />
        <ul className='flex flex-col gap-2 p-3 '>
            <li className='opacity-50 hover:text-colorCustom2 hover:opacity-100 transition-all duration-300'><Link to={'allNews'}>All News</Link></li>
            {data?.map((item , i) => {
              return <li key={i} className='opacity-50 hover:text-colorCustom2 hover:opacity-100 transition-all duration-300'><Link to={`category/${item._id}`}>{item.name}</Link></li>     

            })}
        </ul>
        <ul className='text-white opacity-60 flex justify-between p-2'>
            <li><Link><FaFacebookF /></Link></li>
            <li><Link><FaInstagram /></Link></li>
            <li><Link><FaTwitter /></Link></li>
        </ul>
      </div>
    </div>
  )
}


export default Nav2
