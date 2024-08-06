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
      <div className="md:flex items-center hidden text-Primario text-text lg:text-xl hover:text-violet-800 hover:cursor-pointer">
        <button
          className="flex flex-row justify-center m-3 transition-all duration-300"
          onClick={handleOnClick}
        >
          <FaShoppingCart size={25} className="mx-1 lg:size-8" />
        </button>
      </div>

      {button && (
        <div className="absolute top-full right-0 w-full  z-40">
          <ShoppingCart />
        </div>
      )}
    </>
  );
};
