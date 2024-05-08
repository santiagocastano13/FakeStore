import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
export const Header = () => {
  return (
    <header className='w-full h-24 border-b-2' >
        
      <nav className='w-full h-22 flex flex-col items-center justify-center pt-2 bg-color8'>
        <h1 className='text-gray-200 text-4xl w-full text-center p-1 border-b-2'> Fake Store </h1>
           <div className='w-full flex items-center justify-center bg-color2'>
              <ul className='w-4/5 flex items-center justify-evenly text-white ' >
                <li> <a href='#'>Categorias</a> </li>
                <li> <a href='#'>bbb</a> </li>
                <li> <a href='#'>ccc</a> </li>
                <div className=' w-2/5 flex items-center justify-evenly'>
                  <input type='search' placeholder='Buscar Producto' className='w-3/5 rounded-xl pl-2 border-2 bg-color5'/>   
                  <a href='#' className=' text-4xl'> <FaCartShopping /> </a>
                </div>
                

              </ul>
            </div>
      </nav>
    </header>
  )
}
