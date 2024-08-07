// import React, { useState } from 'react'
// import { IProducts, products } from './cart'

// const priceFunction = () => {
//     let priceTotal = 0

//     const subTotal = products.find((e) => priceTotal += e.price)
//     console.log(priceTotal)
// }
// priceFunction()

// export const TotalPrice: React.FC = () => {
//     const [price, setPrice] = useState<IProducts[]>(products)
 


//   return (
//     <div className='w-full h-[150px] flex justify-center items-center'>
        
//         <h2>Total: $</h2>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import {  products } from './cart';

export const TotalPrice: React.FC = () => {
    const [priceTotal, setPriceTotal] = useState<number>(0);

    useEffect(() => {
        // Calcular el precio total de todos los productos
        const total = products.reduce((sum, product) => sum + product.price, 0);
        setPriceTotal(total);
    }, []); // El array vacío [] asegura que esto se ejecute solo una vez cuando el componente se monta

    return (
        <div className='w-full h-[150px] flex justify-center items-center'>
            <h2>Total: ${priceTotal}</h2>
        </div>
    );
};
