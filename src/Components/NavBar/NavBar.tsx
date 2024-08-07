import React, { useEffect, useState } from "react";
import ResponsiveNav from "./ResponsiveNav/ResponsiveNav";
import ProductsPop from "../ProductsPop/ProductsPop";
import logo from "../../assets/logo-Photoroom.png";
import { Cart } from "../Cart/Cart";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function NavBar(): React.ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0  w-full pb-1 z-50  bg-white ${
        isScrolled ? "shadow-lg" : null
      }`}
    >
      <div className="flex flex-wrap justify-between items-center ">
        <div className="w-1/4 flex justify-center items-center">
          <SignedOut>
            <SignInButton>
              <img src={`${logo}`} alt="Logo" className="h-12 cursor-pointer" />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        {/**Navbar 768px  */}
        <div className="w-1/2 md:flex justify-center hidden ">
          <ul className="w-full flex justify-evenly font-medium text-text ">
            <li className="m-3 text-Primario font-bold hover:text-PrimarioOscuro transition-all duration-300">
              <Link
                to="/"
                className="flex flex-row justify-center lg:text-2xl duration-1000 hover:scale-110 "
              >
                <p className="">Inicio</p>
              </Link>
            </li>

            <li
              className="m-3 text-Primario hover:text-PrimarioOscuro transition-all duration-300 font-bold group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="flex flex-row hover:scale-110 justify-center lg:text-2xl duration-1000 hover:cursor-default">
                Productos
              </p>

              <div
                className={`group-hover:block bg-black min-w-screen min-h-screen fixed hidden group-hover ${
                  isHovered ? "animate-fadeIn" : "animate-fadeOut"
                }`}
              >
                <div className="flex justify-center">
                  <ProductsPop />
                </div>
              </div>
            </li>

            <li className="m-3 text-Primario hover:text-PrimarioOscuro transition-all duration-300">
              <Link
                to="/contacto"
                className="flex flex-row justify-center lg:text-2xl duration-1000 hover:scale-110 font-bold"
              >
                <p>Contactos</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:flex w-1/4  justify-center items-cente hidden">
          <Cart />
        </div>

        <ResponsiveNav />
      </div>
    </nav>
  );
}

export default NavBar;
