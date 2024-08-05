import React from 'react'
import { FaIceCream, FaShoppingCart } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { RiContactsBook3Fill } from 'react-icons/ri'

function ResponsiveNav():React.ReactElement {
  return (
    <div className="flex md:hidden">
          <ul className="flex font-medium text-text">
            <li className="p-2 text-Primario hover:text-violet-800 transition-all duration-300">
              <a href="" className="flex flex-row justify-center">
                <ImHome size={25} className="mx-1" />
              </a>
            </li>
            <li className="p-2 text-Primario hover:text-violet-800 transition-all duration-300">
              <a href="/products" className="flex flex-row justify-center">
                <FaIceCream size={25} className="mx-1" />
              </a>
            </li>
            <li className="p-2 text-Primario hover:text-violet-800 transition-all duration-300">
              <a href="" className="flex flex-row justify-center">
                <RiContactsBook3Fill size={25} className="mx-1" />
              </a>
            </li>
            <li className="p-2 text-Primario hover:text-violet-800 transition-all duration-300">
              <a className="flex flex-row justify-center">
                <FaShoppingCart size={25} className="mx-1" />
              </a>
            </li>
          </ul>
        </div>
  )
}

export default ResponsiveNav