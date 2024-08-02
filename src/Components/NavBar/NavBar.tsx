import React from 'react'
import { FaIceCream, FaShoppingCart } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { RiContactsBook3Fill } from 'react-icons/ri'

function NavBar():React.ReactElement {
  return (
    <nav className={`fixed top-0 z-50 w-full pb-1 shadow-md bg-white` } >
        <div className='flex flex-wrap justify-between items-center px-2 md:px-6 py-4 md:py-2'  >
            <a  className='flex justify-center items-center gap-2 font-semibold font-serif text-azul text-xl select-none'>
                <span>IceCream</span>
            </a>
            {/**Navbar 768px  */}
            <div  className='md:flex hidden'>
                <ul className='flex font-medium text-text'>

                    <li className='m-3 text-violeta hover:text-violet-800 transition-all duration-300' >
                        <a href="" className='flex flex-row justify-center'>
                            <ImHome size={25} className='mx-1'/>
                            <p>Inicio</p>
                        </a>
                    </li>
                <li className='m-3 text-violeta hover:text-violet-800 transition-all duration-300' >
                        <a href="" className='flex flex-row justify-center'>
                            <FaIceCream  size={25} className='mx-1' />
                            <p>Productos</p>
                        </a>
                    </li>
                    <li className='m-3 text-violeta hover:text-violet-800 transition-all duration-300' >
                        <a href="" className='flex flex-row justify-center'>
                            <RiContactsBook3Fill size={25} className='mx-1' />
                            <p >Contactos</p> 
                        </a>
                    </li>
                    
                </ul>
            </div>
        
        
            <div className='md:flex items-center hidden text-text text-violeta hover:text-violet-800 hover:cursor-pointer'>
                <a className='flex flex-row justify-center m-3 transition-all duration-300' >
                    <FaShoppingCart size={25} className='mx-1' />
                </a>
                
            </div>



              {/**Navbar responsive  */}
           
            {/* <ResponsiveNavbar isOpen={open}/> */}
            <div className='flex md:hidden'>
                <ul className='flex font-medium text-text'>

                    <li className='p-2 text-violeta hover:text-violet-800 transition-all duration-300' >
                        <a href="" className='flex flex-row justify-center'>
                            <ImHome size={25} className='mx-1'/>
                        </a>
                    </li>
                <li className='p-2 text-violeta hover:text-violet-800 transition-all duration-300' >
                        <a href="" className='flex flex-row justify-center'>
                            <FaIceCream  size={25} className='mx-1' />
                        </a>
                    </li>
                    <li className='p-2 text-violeta hover:text-violet-800 transition-all duration-300' >
                        <a href="" className='flex flex-row justify-center'>
                            <RiContactsBook3Fill size={25} className='mx-1' />
                        </a>
                    </li>
                    <li className='p-2 text-violeta hover:text-violet-800 transition-all duration-300' >
                        <a className='flex flex-row justify-center' >
                            <FaShoppingCart size={25} className='mx-1' />
                        </a>
                    </li>
                    
                </ul>

            </div>
        </div>
          
    </nav>
  )
}

export default NavBar