import React from "react";
import { ImgHome } from "../../Components/ImgHome/ImgHome";
import { InfoHome } from "../../Components/InfoHome/InfoHome";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-violeta w-full min-h-screen">
      <div className="md:hidden bg-white w-full h-9"></div>
      <div
        id="cajaA"
        className="flex justify-center w-full h-40 md:h-64 overflow-hidden"
      >
        <img
          src="https://i.ibb.co/QF77dsK/Diseno-sin-titulo-4.png"
          alt=""
          className="w-full"
        />
      </div>

      <div
        id="cajaB"
        className="relative flex md:flex-row flex-col -mt-10 w-full"
      >
        <div className="lg:relative flex justify-center md:justify-end items-center lg:-mt-5 xl:-mt-14 w-full md:w-1/2 md:h-full">
          <ImgHome />
        </div>
        <div className="w-full md:w-1/2 h-full">
          <InfoHome />
        </div>
      </div>
    </div>
  );
};
