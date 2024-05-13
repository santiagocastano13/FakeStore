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
                <div key={product.id} className='w-1/5 m-11 border-2 border-black rounded-lg flex flex-col items-center justify-between'>
                    <img src={product.image} alt='ImageReference' className='w-full h-40 rounded-lg'/>
                    <div className='w-full h-3/5 flex flex-col justify-between'>
                        <h2 className='text-xl'>{product.title}</h2>
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                    </div>
                    <button onClick={() => addToCart(product)} className='w-4/5 m-6 bg-fuchsia-950 text-white hover:bg-black'>Add to Cart</button>
                <div>
                    {
                        JSON.stringify(cart, null, 2)
                    }
                </div>
                </div>
            );
        })}
    </>
  )
}
