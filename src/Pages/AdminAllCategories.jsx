import React from 'react'
import { useDeleteCatMutation, useGetAllCategoriesQuery } from '../store/api'
import { MdDeleteSweep } from "react-icons/md";
import Loading from '../components/Loading';
import toast from 'react-hot-toast';
import Toast from '../components/Toast';


function AdminAllCategories() {
    const { data, isLoading } = useGetAllCategoriesQuery()
    const [deleteCat] = useDeleteCatMutation()
    console.log(data);
    
    
    

    async function handleDelete(id){
        try {
            await deleteCat(id).unwrap();
            toast.success('Successfully deleted');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error('Error deleting the category');
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
                          <span>{i + 1}. {item.name} </span>
                          <div className='text-xl flex gap-2'>
                              <MdDeleteSweep onClick={() => handleDelete(item._id)} className='cursor-pointer' />
                          </div>
                      </li>
                  )
              )}
          </ul>
      </div>
  )
}

export default AdminAllCategories
