import React, { useEffect, useState } from 'react'
import { IProducts, products } from './cart'
import './ShoppingCart.css'

export const ShoppingCart: React.FC = () => {
    const [dataState, setDataState] = useState<IProducts[]>()

    useEffect(() => {
        const data = products
        setDataState(data)
    }, [])

  return (
    <div className='w-full min-h-screen z-40 bgCart flex justify-end items-start'>
        <div className='w-full min-h-screen md:w-1/4 md:min-h-[300px] lg:min-h-[400px]  flex flex-col justify-start items-start bg-white'>
            {
                dataState ? (
                    dataState.map((e) => {
                        return(
                            <div key={e.id} className='w-full flex flex-col justify-center items-center'>
                                <h3>{e.name}</h3>
                                <p>
                                    <strong>Sabores:</strong> {e.flavors.join(', ')}
                                </p>
                                <p>
                                    <strong>Salsas:</strong> {e.dip.join(', ')}
                                </p>
                                <p>
                                    <strong>Topping:</strong> {e.topping.join(', ')}
                                </p>
                                {/* {
                                    e.dip.map((d)=>{
                                        return(<h3>{d}</h3>)
                                    })
                                }
                                {
                                    e.topping.map((t)=>{
                                        return(<h3>{t}</h3>)
                                    })
                                } */}
                                
                            </div>
                        )
                    })
                ) : ('no hay productos en el carrito')
            }
        </div>
    </div>
  )
}
