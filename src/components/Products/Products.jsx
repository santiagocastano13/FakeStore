import React, { useEffect } from 'react'
import { useState } from "react";

const URL ='https://fakestoreapi.com/products'


export const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( () =>{
    fetch(URL)
        .then(res=>res.json())
        .then(json=> {
            console.log(json);
            setProducts(json);
        })
        .catch(err =>{ 
            console.error(err.message)
        });
    }, []);

  return (
    <>
        {
        products.map((product) => {
            return(
                <div key={product.id} className='w-1/5 bg-color3 m-11 border-2 border-black rounded-lg flex flex-col items-center justify-between'>
                    <img src={product.image} alt='ImageReference' className='w-full h-3/4 rounded-lg'/>
                    <div className='w-full h-3/5 flex flex-col justify-between'>
                        <h2 className='text-xl'>{product.title}</h2>
                        <p>{product.category}</p>
                        <p className='text-sm'>{product.description}</p>
                        <p>{product.price}</p>
                    </div>
                    <button className='w-4/5 bg-color1 m-6'>Agregar al carrito</button>
                </div>
            );
        })}
    </>
  )
}
