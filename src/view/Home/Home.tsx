import React from "react";
import Example from "../../Components/Exemple/Exemple";

export const Home: React.FC = () => {
  return (
    <div className='flex flex-col justify-evenly items-center p-10 w-full min-h-screen'>
        <div className='bg-amber-400 mb-3 w-full sm:w-[70%] md:w-[80%] lg:w-[90%] xl:h-[400px] min-h-[200px] lg:min-h-[300px]'>
            banner
        </div>
        <div className='flex md:flex-row flex-col justify-evenly items-center w-full h-[300px] xl:h-[400px]'>
            <div className='bg-red-400 mb-5 lg:mb-0 w-full md:w-[30%] h-[200px] md:h-[300px] lg:h-full'>carrusel 1</div>
            <div className='bg-red-400 mb-5 lg:mb-0 w-full md:w-[30%] h-[200px] md:h-[300px] lg:h-full'>carrusel 2</div>
        </div>
      </div>
  );
};
