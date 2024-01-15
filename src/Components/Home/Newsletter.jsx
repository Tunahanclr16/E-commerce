import React, { useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
export default function Newsletter() {
    const [email,setEmail]=useState('')
    
    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
  return ( 
    <div className='bg-gray-300 mt-12 h-64'>
        <div className='flex justify-center h-full items-center flex-col'>
            <div>
                <h1 className='text-black md:text-4xl text-center sm:text-2xl text-xl '>NewsLetter</h1>
                <p className='text-black/60 mt-1 text-[13px] font-normal leading-6'>Subscribe to our newsletters and don’t miss new arrivals, the latest fashion updates and our promotions.</p>
                <div className="flex justify-center items-center  mt-2 ">
                <input onChange={emailChange} value={email}  type="email" placeholder='enter your email adresss' className='leading-10 bg-transparent  w-[346px] rounded  text-[#777] h-10 border-2 outline-none border-[#8a8a8a] '/>
                <div className='flex items-center text-gray-400 bg-transparent hover:bg-black hover:text-white transition-all border-2 border-[#8a8a8a] cursor-pointer h-10 w-11 justify-center'>
                    <button type='submit'>
                    <MdNavigateNext className='' size={32}/>
                    </button>
                </div>
                </div>
                </div>
        </div>
    </div>
  )
}
