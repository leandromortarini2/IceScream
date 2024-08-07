import React, { useEffect, useState } from 'react'
import { IProducts, products } from './cart'
import './ShoppingCart.css'
import { ButtonWpp } from '../Cart/ButtonWpp/ButtonWpp'
import { TotalPrice } from './TotalPrice'

export const ShoppingCart: React.FC = () => {
    const [dataState, setDataState] = useState<IProducts[]>()

    useEffect(() => {
        const data: IProducts[] = products
        setDataState(data)
    }, [])

  return (
    <div className='w-full min-h-screen z-40 bgCart flex justify-end items-start'>
        <div className='w-full min-h-screen md:w-1/4 md:min-h-[300px] lg:min-h-[400px]  flex flex-col justify-start items-start bg-white'>
            {
                dataState ? (
                    dataState.map((e) => {
                        return(
                            <>
                            <div key={e.id} className='w-full flex flex-col justify-center items-center borderB mb-2'>
                                <h3><strong>{e.name}</strong>  <span className='text-gray-600'>${e.price}</span></h3>
                                <p>
                                    Sabores: {e.flavors.join(', ')}
                                </p>
                                <p>
                                   Salsas: {e.dip.join(', ')}
                                </p>
                                <p className='mb-2'>
                                    Topping: {e.topping.join(', ')}
                                </p>  
                               
                            </div>
                            </>
                        )
                    })
                ) : ('no hay productos en el carrito')
            }
            <div className='w-full flex justify-center items-center'>
                <TotalPrice/>
            </div>
            <div className='w-full flex justify-center items-center'>
                <ButtonWpp/>
            </div>
        </div>
        
    </div>
  )
}
