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
      <div className="flex flex-wrap justify-between items-center px-2 md:px-6 py-4 md:py-2">
        <SignedOut>
          <SignInButton>
            <img src={`${logo}`} alt="Logo" className="h-12 cursor-pointer" />
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/**Navbar 768px  */}
        <div className="md:flex hidden">
          <ul className="flex font-medium text-text">
            <li className="m-3 text-Primario hover:text-PrimarioOscuro transition-all duration-300">
              <Link
                to="/"
                className="flex flex-row justify-center lg:text-xl duration-1000 hover:scale-110"
              >
                <p>Inicio</p>
              </Link>
            </li>

            <li
              className="m-3 text-Primario hover:text-PrimarioOscuro transition-all duration-300 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <p className="flex flex-row hover:scale-110 justify-center lg:text-xl duration-1000 hover:cursor-default">
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
                className="flex flex-row justify-center lg:text-xl duration-1000 hover:scale-110"
              >
                <p>Contactos</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:inline hidden">
          <Cart />
        </div>

        <ResponsiveNav />
      </div>
    </nav>
  );
}

export default NavBar;
