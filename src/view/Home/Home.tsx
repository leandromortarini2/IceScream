import React from 'react'

export const Home: React.FC = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-evenly items-center'>
        <div className='w-full min-h-[200px] sm:w-[70%] md:w-[80%] lg:w-[90%] lg:min-h-[300px] xl:h-[400px] bg-amber-400 mb-3'>
            banner
        </div>
        <div className='w-full h-[300px] xl:h-[400px] flex flex-col md:flex-row justify-evenly items-center'>
            <div className='w-full md:w-[30%] h-[200px] md:h-[300px] lg:h-full bg-red-400 mb-5 lg:mb-0'>carrusel 1</div>
            <div className='w-full md:w-[30%] h-[200px] md:h-[300px] lg:h-full bg-red-400 mb-5 lg:mb-0'>carrusel 2</div>
        </div>
    </div>
  )
}
