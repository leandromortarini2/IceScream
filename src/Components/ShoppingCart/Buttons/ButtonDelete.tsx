import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";


export const ButtonDelete: React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center mt-5'>
        <RiDeleteBin6Line className='text-2xl text-red-500 hover:text-red-600  cursor-pointer'/>   
    </div>
  )
}
