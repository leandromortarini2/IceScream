import React from 'react'
import { FaIceCream } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { RiContactsBook3Fill } from 'react-icons/ri'
import { Cart } from '../../Cart/Cart'
import { Link } from 'react-router-dom'

function ResponsiveNav():React.ReactElement {
  return (
    <div className="flex md:hidden">
          <ul className="flex font-medium text-text">
            <li className="p-2 text-Primario hover:text-PrimarioOscuro transition-all duration-1000 hover:scale-110">
              <Link to="/" className="flex flex-row justify-center">
                <ImHome size={25} className="mx-1" />
              </Link>
            </li>
            <li className="p-2 text-Primario hover:text-PrimarioOscuro transition-all duration-1000 hover:scale-110">
              <a href="#products"  className="flex flex-row justify-center e">
                <FaIceCream size={25} className="mx-1" />
              </a>
            </li>
            <li className="p-2 text-Primario hover:text-PrimarioOscuro transition-all duration-1000 hover:scale-110">
              <Link to="contacto" className="flex flex-row justify-center">
                <RiContactsBook3Fill size={25} className="mx-1" />
              </Link>
            </li>
            {/* <li className="p-2 text-Primario hover:text-violet-800 transition-all duration-300">
              <a className="flex flex-row justify-center">
                <FaShoppingCart size={25} className="mx-1" />
              </a>
            </li> */}
            <li>
              <Cart />
            </li>
          </ul>
        </div>
  )
}

export default ResponsiveNav