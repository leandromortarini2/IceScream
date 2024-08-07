import React, { useState } from "react";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { FaShoppingCart } from "react-icons/fa";

export const Cart: React.FC = () => {
  const [button, setButton] = useState<boolean>(false);
  
  const handleOnClick = () => {
    setButton(!button);
  };
  return (
    <>
      <div className="md:flex items-center text-Primario text-text lg:text-xl hover:text-PrimarioOscuro hover:scale-110 duration-1000 hover:cursor-pointer">
        <button
          className="flex flex-row justify-center m-3 transition-all"
          onClick={handleOnClick}
        >
          <FaShoppingCart size={25} className="mx-1 lg:size-8" />
        </button>
      </div>

      {button && (
        <div className="top-full right-0 z-40 absolute w-full">
          <ShoppingCart />
        </div>
      )}
    </>
  );
};
