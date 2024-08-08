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
        <div className='w-full h-[100px] flex justify-center items-center'>
            <h2 className='text-[#2b2d42] font-extrabold'>Total: ${priceTotal}</h2>
        </div>
    );
};
