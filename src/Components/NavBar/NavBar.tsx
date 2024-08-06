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
    <nav className={`fixed top-0  w-full pb-1 z-50  bg-white`}>
      <div className="flex flex-wrap justify-between items-center px-2 md:px-6 py-4 md:py-2">
        <a href="/login" className="flex justify-center items-center gap-2 font-semibold font-serif text-Secundario text-xl hover:cursor-default select-none">
          <span className="md:inline hidden">
          Ice
          </span>
          <img src={`${logo}`} alt="Logo" className="h-12" />
          <span className="md:inline hidden">
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
            onMouseLeave={() => setIsHovered(false)}
            >

              <a href="" className="flex flex-row justify-center lg:text-xl">
                <FaIceCream size={25} className="mx-1 lg:size-8" />
                <p>Productos</p>
              </a>

              <div className={`group-hover:block bg-black min-w-screen min-h-screen fixed hidden group-hover ${
            isHovered ? 'animate-fadeIn' : 'animate-fadeOut'}`}>
               
                <div className="flex justify-center">

                 {/* <div id="FondoBlur" className="top-0 right-0 left-0 z-40 fixed bg-white backdrop-blur-sm w-full min-h-screen" 
                  onMouseEnter={() => setIsHovered(true)}></div> */}
                  <ProductsPop />
                </div> 
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
