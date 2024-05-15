import React, { useContext, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AppContext } from '../Context/Context';
import { FaTrash } from "react-icons/fa";



export const Cart = () => {


  const [isOpen, setIsOpen] = useState(false);
  const {cart, addToCart, clearCart, removeFromCart} = useContext(AppContext);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);


  const toggleCart = () => {
    setIsOpen(!isOpen);
  };


  function CartItem({title, image, quantity, price, id}) {
    return(
        <li className="flex items-center space-x-4 mb-4 border-b-2">
              <img
                src={image}
                alt='product'
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <p className="font-semibold text-lg">{title}</p>
                <span className="text-white text-3xl">${price}</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-white hover:text-black" onClick={()=>addToCart({id})}>
                  <span>+</span>
                </button>
                <span className="font-semibold text-3xl">{quantity}</span>
                <button className="text-white hover:text-black" onClick={()=>removeFromCart({id})}>
                  <span>-</span>
                </button>
              </div>
        </li>
    )
  }

  return (
    <>
      <button onClick={toggleCart} className=" flex items-center justify-evenly p-1 w-48 border-double border-4 text-white text-2xl focus:outline-none"> Open Cart
        <FaShoppingCart className="text-3xl" />
      </button>
      {isOpen && (
        <aside className="fixed inset-y-0 right-0 w-96 bg-black p-4 flex flex-col justify-between overflow-y-scroll ">
            <button onClick={toggleCart} className='pb-2 border-b-2'>
                <IoClose />
            </button>
          <div className='w-full h-full p-2'>
            <ul>
              {cart.map(product => (
                  <CartItem key={product.id} {...product}/>
              ))}
            </ul>
          </div>
          <div className='w-full p-2 flex items-center justify-between mb-4 border-b-2'>
            <span className="text-white text-2xl">Total: ${totalPrice}</span>
          </div>
          <div className='w-full p-2 flex items-center justify-center mb-4'>
            <button className='flex justify-center items-center text-red-600' onClick={clearCart}>
              <FaTrash />
            </button>
          </div>
          


        </aside>
      )}
    </>
  );
};

