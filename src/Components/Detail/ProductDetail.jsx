import { useState } from "react"

export default function ProductDetail({product}) {
    const [count,setCount]=useState(0)

            const increment=()=>{
                setCount(count+1)
            }
            const decrement=()=>{
             if(count>0){
                 setCount(count-1)
             }
            }

  return (
<>
<div className='flex max-w-[1440px] mx-auto justify-center items-center h-screen'>
            <div className='flex sm:flex-row flex-col items-center'>
                <div>
                <img src={product.image} alt="" />
                </div>
                <div className='p-2'>
                    <h1 className='text-black font-bold text-3xl'>{product.title}</h1>
                    <p className=' mt-2 text-gray-500  sm:max-w-[600px]'> {product.description}</p>
                    <div className='flex mt-10 gap-2 items-center  w-32  h-9'>
                       <div className="mx-auto border  border-gray-800 rounded-md p-2  flex items-center justify-center ">
                        <p className="text-lg">QUANTİTY</p>
                       <span onClick={increment} className='text-2xl cursor-pointer'>+</span>
                        <span className='text-2xl'>{count}</span>
                        <span  onClick={decrement} className='text-2xl cursor-pointer'>-</span>
                       </div>
                    <div className="flex mb-4 items-center">
                    <button className='mt-4 bg-black text-white h-14 whitespace-nowrap   px-10 rounded hover:bg-gray-300 hover:text-black transition-all shadow-lg'>Add to Cart</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>

    </>
  )
}
