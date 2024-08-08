import React from 'react'
// import './ButtonWpp.css'

export const ButtonWpp: React.FC = () => {

  return (
    <div className='w-full h-[100px] flex justify-center items-center'>
        <button className='w-[150px] h-[40px] bg-Secundario rounded-xl font-semibold hover:bg-[#eec876] text-PrimarioOscuro shadow-lg shadow-[#cdc864]  hover:scale-105 duration-500'>Enviar pedido</button>
    </div>
  )
}
