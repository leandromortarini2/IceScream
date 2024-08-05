import React from "react";
import './ImgHome.css'
export const ImgHome: React.FC = () => {
  return (
    <>
      <div className="w-1/2 h-1/2 md:w-2/3 md:h-2/3 lg:w-3/5 flex justify-center items-center ">
        <img
          src="https://i.ibb.co/FDHFSvZ/Cuadrado-Photoroom.png"
          alt=""
          className="w-full h-full shadowImg"
        />
      </div>
    </>
    
  );
};
