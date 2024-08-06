import React, { useState } from "react";
import { FaIceCream, FaShoppingCart } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { RiContactsBook3Fill } from "react-icons/ri";
import ResponsiveNav from "./ResponsiveNav/ResponsiveNav";
import ProductsPop from "../ProductsPop/ProductsPop";
import logo from "../../assets/logo-Photoroom.png"

function NavBar(): React.ReactElement {

  const [isHovered, setIsHovered] = useState(false);



  return (
    <nav className={`fixed top-0 z-50 w-full pb-1  bg-white`}>
      <div className="flex flex-wrap justify-between items-center px-2 md:px-6 py-4 md:py-2">
        <a href="/login" className="flex justify-center items-center gap-2 font-semibold font-serif text-Secundario text-xl hover:cursor-default select-none">
          <span>
          Ice
          </span>
          <img src={`${logo}`} alt="Logo" className="h-12" />
          <span>
          Scream
          </span>
        </a>
        {/**Navbar 768px  */}
        <div className="md:flex hidden">
          <ul className="flex font-medium text-text">
            <li className="m-3 text-Primario hover:text-violet-800 transition-all duration-300">
              <a href="" className="flex flex-row justify-center lg:text-xl">
                <ImHome size={25} className="mx-1 lg:size-8" />
                <p>Inicio</p>
              </a>
            </li>
            
            <li className="m-3 text-Primario hover:text-violet-800 transition-all duration-300 group"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
              <a href="" className="flex flex-row justify-center lg:text-xl">
                <FaIceCream size={25} className="mx-1 lg:size-8" />
                <p>Productos</p>
              </a>
              <div className={`group-hover:block left-[25%] absolute hidden m-auto group-hover ${
          isHovered ? 'animate-fadeIn' : 'animate-fadeOut'
        }`}>
                <ProductsPop />
              </div>
            </li>

            <li className="m-3 text-Primario hover:text-violet-800 transition-all duration-300">
              <a href="" className="flex flex-row justify-center lg:text-xl">
                <RiContactsBook3Fill size={25} className="mx-1 lg:size-8" />
                <p>Contactos</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="md:flex items-center hidden text-Primario text-text lg:text-xl hover:text-violet-800 hover:cursor-pointer">
          <a className="flex flex-row justify-center m-3 transition-all duration-300">
            <FaShoppingCart size={25} className="mx-1 lg:size-8" />
          </a>
        </div>

        {/**Navbar responsive  */}
          <ResponsiveNav />

        {/* <ResponsiveNavbar isOpen={open}/> */}
      </div>
    </nav>
  );
}

export default NavBar;
