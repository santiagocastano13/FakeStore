import React, { useContext, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
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
        <li className="flex items-center space-x-4 mb-4">
              <img
                src={image}
                alt='product'
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-grow">
                <p className="font-semibold text-xl">{title}</p>
                <span className="text-gray-500 text-3xl">${price}</span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-black" onClick={()=>addToCart({id})}>
                  <span>+</span>
                </button>
                <span className="font-semibold text-3xl">{quantity}</span>
                <button className="text-gray-500 hover:text-black" onClick={()=>removeFromCart({id})}>
                  <span>-</span>
                </button>
              </div>
        </li>
    )
  }

  return (
    <>
      <button onClick={toggleCart} className="text-gray-600 focus:outline-none">
        <BsCart4 className="inline-block text-2xl" />
      </button>
      {isOpen && (
        <aside className="fixed inset-y-0 right-0 w-auto bg-gray-900 p-4 flex flex-col justify-between">
            <button onClick={toggleCart}>
                <IoClose />
            </button>
          <div className='w-full h-full'>
            <ul>
              {cart.map(product => (
                  <CartItem key={product.id} {...product}/>
              ))}
            </ul>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <span className="text-gray-500 text-2xl">Total: ${totalPrice}</span>
            <button className='flex justify-center items-center' onClick={clearCart}>
              <FaTrash />
            </button>
          </div>


        </aside>
      )}
    </>
  );
};

