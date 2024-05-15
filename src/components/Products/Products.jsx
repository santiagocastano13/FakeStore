import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import { AppContext } from '../Context/Context';


const URL ='https://fakestoreapi.com/products'


export const Products = () => {

    const context = useContext(AppContext);
    const {addToCart, cart} = useContext(AppContext);
    const filtered = context.filterProducts;

    const [products, setProducts] = useState([]);


    useEffect( () =>{
        fetch(URL)
            .then(res=>res.json())
            .then(json=> {
                setProducts(json);
            })
            .catch(err =>{ 
                console.error(err.message)
            });
        }, []);
    

       
  return (
    <>
        {
        filtered(products).map((product) => {
            return(
                <div key={product.id} className='w-80 m-11  rounded-lg flex flex-col items-center justify-between shadow-2xl p-2  '>
                    <div className='w-full'>
                        <img src={product.image} alt='ImageReference' className='w-full p-4 h-80 rounded-lg'/>
                    </div>
                    <div className='w-full h-3/5 flex flex-col justify-between'>
                        <h2 className='text-xl'>{product.title}</h2>
                        <p>{product.category}</p>
                        <p>${product.price}</p>
                    </div>
                    <button onClick={() => addToCart(product)} className='w-4/5 m-6 p-2 border-double border-4 bg-black text-white hover:bg-black'>Add to Cart</button>
                </div>
            );
        })}
    </>
  )
}


// hover:-translate-y-4 duration-200