import React from "react";
import { HeaderProducts } from "../../Components/HeaderProducts/HeaderProducts";

export const Products: React.FC = () => {
  return (
    <div className="w-full min min-h-screen bg-[#f4f3ec]">
      {/* Cabecera products */}
      <HeaderProducts />
      {/* Container de productos */}
      <div className="w-full min md:h-32-lg:h-[510px] bg-gray-400"></div>
    </div>
  );
};
