import React, { useEffect, useState } from 'react'
import { IProducts, products } from './cart'
import './ShoppingCart.css'
import { ButtonWpp } from '../Cart/ButtonWpp/ButtonWpp'
import { TotalPrice } from './TotalPrice'
import { ButtonDelete } from './Buttons/ButtonDelete'
import { ButtonsAddyDelete } from './Buttons/ButtonsAddyDelete'

export const ShoppingCart: React.FC = () => {
    const [dataState, setDataState] = useState<IProducts[]>()

    useEffect(() => {
        const data: IProducts[] = products
        setDataState(data)
    }, [])

  return (
    <div className='w-full min-h-screen z-40  flex justify-end items-start'>
        <div className='w-full max-h-screen sm:w-[300px] lg:w-[400px] sm:max-h-96 lg:max-h-96  flex flex-col justify-start items-start bg-[#f5f8a1] overflow-y-auto cart-scrollbar  shadow-xl shadow-PrimarioOscuro rounded sm:mr-5'>
            <div className='w-full h-[50px] flex justify-center items-center '>
                <img src="https://i.ibb.co/9w5V4DG/Dise-o-sin-t-tulo-3-Photoroom.png" alt="" />
            </div>
            {
                dataState ? (
                    dataState.map((e) => {
                        return(
                            <>
                            <div key={e.id} className='w-full max-h-screen flex justify-center items-center borderB p-5 '>
                                <div className='w-[85%] flex flex-col justify-center items-center'>
                                    <h3 className='text-center'><strong className='text-[#2b2d42] text-sm md:text-md lg:text-xl'>{e.name}</strong>  <span className=' text-[#40425e]'>${e.price}</span></h3>
                                    <p  className='text-[#2b2d42] text-center text-sm md:text-md lg:text-xl'>
                                        Sabores: {e.flavors.join(', ')}
                                    </p>
                                    <p className='text-[#2b2d42] text-center text-sm md:text-md lg:text-xl'>
                                    Salsas: {e.dip.join(', ')}
                                    </p>
                                    <p className=' text-[#2b2d42] text-center text-sm md:text-md lg:text-xl'>
                                        Topping: {e.topping.join(', ')}
                                    </p>
                                </div>
                                <div className='w-[15%] h-[100%] flex flex-col justify-evenly items-center '>
                                    <ButtonDelete/>
                                    <ButtonsAddyDelete/>
                                </div>
                            </div>
                           
                            </>
                        )
                    })
                ) : ('no hay productos en el carrito')
            }
            <div className='w-full h-[100px] flex flex-col justify-start items-center '>
                <TotalPrice/>
                <ButtonWpp/>
            </div>
            
        </div>
        
    </div>
  )
}
