import React from "react";
import { ImgHome } from "../../Components/ImgHome/ImgHome";
import { InfoHome } from "../../Components/InfoHome/InfoHome";

export const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-violeta">
      <div className="w-full h-9 bg-white md:hidden "></div>
      <div className="w-full h-40 md:h-64 overflow-hidden flex  justify-center ">
        <img
          src="https://i.ibb.co/QF77dsK/Diseno-sin-titulo-4.png"
          alt=""
          className="w-full"
        />
      </div>

      <div className="w-full  flex flex-col md:flex-row absolute top-[120px] md:static">
        <div className="w-full md:h-full md:w-1/2 flex  justify-center md:justify-end items-center">
          <ImgHome />
        </div>
        <div className="w-full md:w-1/2 h-full ">
          <InfoHome />
        </div>
      </div>
    </div>
  );
};
