import React, { useEffect, useState } from 'react';
import { useDeleteNewsMutation, useGetAllNewsQuery } from '../store/api';
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import EditModal from '../components/EditModal';
import Loading from '../components/Loading';
import Toast from '../components/Toast';
import toast from 'react-hot-toast';

function AdminAllNews() {
    const { data, isLoading } = useGetAllNewsQuery();
    const [show, setShow] = useState(false);
    const [singleData, setSingleData] = useState([]);
    const [deleteNews] = useDeleteNewsMutation();

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
        <div className="flex flex-col  w-full p-4">
            <Toast />
            <ul className="flex flex-col gap-2 w-full sm:w-[80%] md:w-[70%] lg:w-[62%] p-2">
                {isLoading ? (
                    <div className="flex justify-center items-center w-full h-[200px]">
                        <Loading />
                    </div>
                ) : (
                    data?.map((item, i) => (
                        <li
                            className="text-white bg-colorCustom p-4 rounded-md flex justify-between items-center transition-all duration-300"
                            key={i}
                        >
                            <span>{i + 1}. {item.title}</span>
                            <div className="text-xl flex gap-4">
                                <FaEdit
                                    onClick={() => {
                                        setShow(true);
                                        setSingleData(item);
                                    }}
                                    className="cursor-pointer hover:text-green-500 transition-colors"
                                    data-modal-target="default-modal"
                                    data-modal-toggle="default-modal"
                                />
                                <MdDeleteSweep
                                    onClick={() => handleDelete(item._id)}
                                    className="cursor-pointer hover:text-red-500 transition-colors"
                                />
                            </div>
                        </li>
                    ))
                )}
                {/* Show Edit Modal */}
                {show && <EditModal setShow={setShow} item={singleData} />}
            </ul>
        </div>
    );
}

export default AdminAllNews;
