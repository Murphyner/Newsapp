import React, { useState } from 'react'
import { useAddCatMutation } from '../store/api'
import toast from 'react-hot-toast'
import Toast from '../components/Toast'

function AdminAddCat() {
    const [addCat] = useAddCatMutation()
    const [name , setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        addCat({ name })
        toast.success("Category created")
        setName('')
    }
  return (
    <div>
      <Toast />
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <h2 className='text-xl md:text-4xl text-colorCustom'>Add Category</h2>
        <div className='flex flex-col w-[20%] gap-2'>
            <label htmlFor="catName" className='text-colorCustom opacity-90'>Category Name</label>
            <input type="text" id='catName' value={name} onChange={(e) => setName(e.target.value)} placeholder='Category name' className='border-[1px] py-1 px-2 border-colorCustom border-opacity-20 rounded-md shadow-custom outline-none placeholder-colorCustom placeholder-opacity-50 shadow-colorCustom' />
        </div>
        <div>
            <button type='submit' className='bg-colorCustom bg-opacity-80 text-white py-1 px-6 rounded-md hover:bg-opacity-100 transition-all duration-300'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AdminAddCat
