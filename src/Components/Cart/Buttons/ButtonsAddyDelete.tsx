import React from 'react'
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";


export const ButtonsAddyDelete: React.FC = () => {
  return (
    <div className='w-full h-full flex justify-center items-center mt-5'>
        <FaRegSquarePlus className=' text-2xl lg:text-3xl text-[#2b2d42] hover:text-[#242639] cursor-pointer mr-2'/>
        <MdOutlineIndeterminateCheckBox className='text-3xl lg:text-4xl text-[#2b2d42] hover:text-[#242639] cursor-pointer'/>
    </div>
  )
}
