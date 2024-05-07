import React from 'react'

export const Header = () => {
  return (
    <header className='w-full h-16 bg-gray-800' >
        <nav className='w-full h-16 flex'>
            <h2 className='text-gray-200 text-2xl w-1/2 bg-orange-400'> Fake Store </h2>
            <div className='w-1/2 flex'>
                <ul className='bg-red-300 flex w-1/2' >
                    <li> <a href='#'>Home</a> </li>
                    <li> <a href='#'>Home</a> </li>
                    <li> <a href='#'>Home</a> </li>
                </ul>
                <a href='#'> <img src='#' alt='carrito'/> </a>

            </div>
        </nav>
    </header>
  )
}
