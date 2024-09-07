import React, { useState } from 'react'
import { useAddNewsMutation, useGetAllCategoriesQuery } from '../store/api'
import toast from 'react-hot-toast'
import Toast from '../components/Toast'

function AdminAddNews() {
    const {data} = useGetAllCategoriesQuery()
    const [addNews] = useAddNewsMutation()
    const [img, setImg] = useState('')
    const [title , setTitle] = useState('')
    const [description , setDescription ] = useState('')
    const [category_id , setCategory_id] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        addNews({img , title , description , category_id}).then(() => {
            toast.success('Successfully created')
        }).then(() => {
            setCategory_id('')
            setDescription('')
            setImg('')
            setTitle('')
        })
    }

    
    
  return (
    <div>
        <Toast />
        <form onSubmit={handleSubmit} className='w-[25%] flex flex-col gap-2'>
        <h2 className='text-4xl text-colorCustom'>Add News</h2>
        <div className='flex flex-col gap-1 '>
            <label htmlFor="title" className='text-colorCustom opacity-90 text-xl'>Title</label>
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" id='title' className='outline-none border-[1px]  p-2 border-colorCustom placeholder-colorCustom placeholder-opacity-80 rounded-md shadow-custom' placeholder='Title'/>
        </div>
        <div className='flex flex-col gap-1 '>
            <label htmlFor="img" className='text-colorCustom opacity-90 text-xl'>Image</label>
            <input onChange={(e) => setImg(e.target.value)} value={img} type="text" id='img' className='outline-none border-[1px]  p-2 border-colorCustom placeholder-colorCustom placeholder-opacity-80 rounded-md shadow-custom' placeholder='Image' />
        </div>
        <div className='flex flex-col gap-1 '>
            <label htmlFor="desc" className='text-colorCustom opacity-90 text-xl'>Description</label>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Description' id="desc" className='outline-none border-[1px]  p-2 border-colorCustom placeholder-colorCustom placeholder-opacity-80 rounded-md shadow-custom'></textarea>
        </div>
        <select onChange={(e) => setCategory_id(e.target.value)} className='outline-none bg-white border-[1px] text-colorCustom text-opacity-80 border-colorCustom rounded-md  p-2 shadow-custom'>
            <option className='focus:bg-colorCustom'>Choose Category</option>
            {data?.map((item , i) => {
               return <option key={i} value={item._id}>{item.name}</option>
            })}
        </select>
        <button className='bg-colorCustom text-white p-2 rounded-md shadow-custom'>Add news</button>
      </form>
    </div>
  )
}

export default AdminAddNews
