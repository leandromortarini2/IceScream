import React from "react";

export const InfoHome: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center md:items-start justify-center  ">
      <h1 className="text-PrimarioOscuro font-cursiva text-3xl md:text-[60px] lg:text-[80px] xl:text-[120px]">
        IceCream
      </h1>
      <h2 className="text-PrimarioOscuro font-extrabold text-xl md:text-2xl lg:text-3xl md:mt-5 lg:mt-10  ">
        La heladeria de tu barrio
      </h2>
      <div className="w-full  md:h-52  flex flex-col items-center md:items-start justify-evenly mt-5 md:mt-10 ">
        <p className="text-white font-bold text-lg md:text-2xl lg:text-3xl">
          Repartos
        </p>
        <p className="text-white font-bold text-base md:text-lg lg:text-2xl">
          en zona Villa Albertina
        </p>
        <p className="text-white  font-bold text-base lg:text-xl">
          Lomas de Zamora
        </p>
        <p className="text-white font-bold text-base lg:text-lg text-center">
          Helados - Postres - Pochoclos y Mucho Mas
        </p>
      </div>
      <button className="w-40 h-10 bg-white p-1 rounded-xl text-violet font-bold text-PrimarioOscuro hover:scale-110 duration-1000 hover:bg-Secundario hover:text-PrimarioOscuro mt-2 mb-5">
        Realiza tu pedido
      </button>
    </div>
  );
};
