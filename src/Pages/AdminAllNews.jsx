import React, { useEffect, useState } from 'react'
import { useDeleteNewsMutation,  useGetAllNewsQuery } from '../store/api'
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import EditModal from '../components/EditModal';
import Loading from '../components/Loading';
import Toast from '../components/Toast';
import toast from 'react-hot-toast';


function AdminAllNews() {
    const {data , isLoading } = useGetAllNewsQuery()    
    const [show , setShow] = useState(false)
    const [singleData , setSingleData] = useState([])
    const [deleteNews ] = useDeleteNewsMutation()
    
    async function handleDelete(id) {
        try {
            await deleteNews(id).unwrap(); 
            toast.success('Successfully deleted');
            setTimeout(() => {
                window.location.reload(); 
            }, 2000); 
        } catch (error) {
            toast.error('Error deleting the news');
        }
    }

    
  return (
    <div>
        <Toast />
      <ul className='flex flex-col gap-1 w-[62%] p-2'>
        {isLoading ? (
            <div className='flex justify-center absolute left-0 top-0 right-0 bottom-0 w-full items-center'>
                <Loading />
            </div>
              ) : (
                  data?.map((item, i) =>
                      <li className='text-white bg-colorCustom p-2 rounded-md flex justify-between' key={i}>
                          <span>{i + 1}. {item.title} </span>
                          <div className='text-xl flex gap-2'>
                              <FaEdit onClick={() => {
                                  setShow('true')
                                  setSingleData(item)
                              }} data-modal-target="default-modal" data-modal-toggle="default-modal" className='cursor-pointer' />
                              <MdDeleteSweep onClick={() => handleDelete(item._id)} className='cursor-pointer' />
                          </div>
                      </li>
                  )
        ) }
       
        {show && <EditModal setShow={setShow} item={singleData} />}
      </ul>
    </div>
  )
}

export default AdminAllNews
