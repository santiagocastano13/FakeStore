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
            setProducts(JSON.stringify(json));
        })
        .catch(err =>{ 
            console.error(err.message)
        });
    }, []);

  return (
    <div>
        {
        products.map((product) => {
            return(
                <div key={product.id}>
                    <img src={product.image} alt='ImageReference'/>
                    <h2>{product.title}</h2>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            );
        })}
    </div>
  )
}
