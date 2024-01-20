import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';

export default function Modal() {
    const {modal}=useSelector((state)=>state.modal)
    const dispatch=useDispatch()
  return (
    <>
    <div className='fixed left-0 bottom-0 right-0 flex justify-center items-center z-50 w-full h-screen'>
        <div className='w-1/3 bg-white p-4 rounded-lg shadow-xl'>
        <div className='flex justify-between items-center'>
        <h2>
        Modal
       </h2>
       <IoMdClose onClick={()=>dispatch(modalFunc())} className=' z-50 cursor-pointer' />
        </div>
        </div>
    </div>
    </>
  )
}
