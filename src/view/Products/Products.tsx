import React from "react";
import { HeaderProducts } from "../../Components/HeaderProducts/HeaderProducts";

export const Products: React.FC = () => {
  return (
    <div className="bg-[#f4f3ec] w-full min-h-screen min" id="products">
      {/* Cabecera products */}
      <HeaderProducts />
      {/* Container de productos */}
      <div className="bg-gray-400 w-full md:h-32-lg:h-[510px] min"></div>
    </div>
  );
};
