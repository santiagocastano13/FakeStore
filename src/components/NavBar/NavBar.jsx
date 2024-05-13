import { Filter } from '../Filter/Filter';
import { Cart } from '../Cart/Cart';



export const NavBar = () => {
  
  return (
    <>
        <nav className='w-full h-24 flex items-center justify-evenly bg-black text-slate-600'>
            <h1 className='text-gray-200 text-4xl text-center border-b-2 border-white'> 𝑭𝒂𝒌𝒆 𝒔𝒕𝒐𝒓𝒆 </h1>
            <Filter />
            <p className='text-4xl text-white flex'><Cart /> <span className='text-lg '>0</span></p>
        </nav>
    </>
  )
}
