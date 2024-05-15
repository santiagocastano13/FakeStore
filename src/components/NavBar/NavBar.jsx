import { Filter } from '../Filter/Filter';
import { Cart } from "../Cart/Cart";


export const NavBar = () => {
  
  return (
    <>
        <nav className='w-full h-24 flex flex-col items-center justify-evenly text-white bg-black'>
            <h1 className='text-gray-200 text-4xl text-center '> 𝑭𝒂𝒌𝒆 𝒔𝒕𝒐𝒓𝒆 </h1>
            <div className='w-full flex items-center p-2'>
              <Filter />
              <div className='text-4xl'>
                <Cart />
              </div>
            </div>
            
        </nav>
    </>
  )
}
