import React from 'react'

export const Item = ({ id,image,title,category,description,price }) => {
  return (
    <div key={id} className='w-1/5 bg-cyan-900'>
        <img src={image} alt='Product Image' />
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button>Agregar al carrito</button>
    </div>
  )
}
