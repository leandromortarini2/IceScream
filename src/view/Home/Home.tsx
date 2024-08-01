import React from "react";
import Example from "../../Components/Exemple/Exemple";

export const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-evenly items-center">
      <div className="w-full min-h-[200px] sm:w-[70%] md:w-[80%] lg:w-[90%] lg:min-h-[300px] xl:h-[400px] bg-amber-400 mb-3">
        banner
      </div>
      <div className="w-full h-[300px] xl:h-[400px] flex flex-col md:flex-row justify-evenly items-center mb-5">
        <div className="w-full md:w-1/3  md:h-[300px] lg:h-full bg-red-400  m-2 flex justify-center items-center">
          <Example />
        </div>
        <div className="w-full md:w-1/3  md:h-[300px] lg:h-full bg-red-400   flex justify-center items-center">
          <Example />
        </div>
      </div>
    </div>
  );
};
