import React, { useState } from 'react'
import { useEditNewsMutation } from '../store/api';

function EditModal({setShow , item}) {
    const { _id,category_id, description, img , title} = item    
    const [editNews] = useEditNewsMutation()
    const id = _id
    


    const [inputTitle, setInputTitle] = useState(title);
    const [inputImg, setInputImg] = useState(img);
    const [inputDesc, setInputDesc] = useState(description);
    const [inputId, setInputId] = useState(category_id._id);

    function handleEdit() {
        const obj = {
            img: inputImg,
            title: inputTitle,
            description: inputDesc,
            category_id: inputId
        }
        editNews({id, obj }).then(() => window.location.reload() )
    }

    return (
        <div>
            <div  className="fixed inset-0 bg-black opacity-70 z-40"></div>
            <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-colorCustom text-white rounded-lg z-50">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold">Editing</h3>
                            <button onClick={() => setShow(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className='flex flex-col gap-2 w-[80%]  mx-auto items-center mt-2'>
                            <div className='flex w-full gap-4 text-xl uppercase'>
                                Title: <input type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} className='rounded-md w-full shadow-custom text-black text-base p-2' />
                            </div>
                            <div className='flex w-full gap-1 text-xl uppercase'>
                                Image: <input type="text" value={inputImg} onChange={(e) => setInputImg(e.target.value)} className='rounded-md w-full shadow-custom text-black text-base p-2 ' />
                            </div>
                            <div className='flex w-full gap-4 text-xl uppercase'>
                                Description: <textarea value={inputDesc} onChange={(e) => setInputDesc(e.target.value)} className='rounded-md w-full shadow-custom text-base text-black p-2'></textarea>
                            </div>
                            <div className='flex w-full gap-10 text-xl uppercase'>
                                ID: <input value={inputId} onChange={(e) => setInputId(e.target.value)} type="text" className='rounded-md w-full shadow-custom text-base text-black p-2 ' />
                            </div>
                        </div>
                        <div className="flex items-center p-4 md:p-5  rounded-b">
                            <button type="button" onClick={handleEdit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal
