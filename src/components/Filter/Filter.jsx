import { useState, useContext } from 'react'
import { AppContext } from '../Context/Context';

export const Filter = () => {
    const context = useContext(AppContext);
    const changeFilter = context.setFilter;


    const handleChangeMinPrice = (e) => {
        changeFilter(preState => ({
            ...preState,
            minPrice: e.target.value
        }))
    };

    const handleChangeCatrgory = (e) =>{
        changeFilter(preState => ({
            ...preState,
            category: e.target.value
        }))
    };

    const priceFiltered = context.filter.minPrice;


  return (
    <div className='w-9/12 flex items-center justify-evenly'>

        <div className='w-80 flex items-center justify-evenly'>
            <label htmlFor="category">Category:  </label>
            <select id="category" onChange={handleChangeCatrgory} className='bg-black text-white font-mono'>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
            </select>
        </div>

        <div className='w-96 flex items-center justify-evenly '>
            <label htmlFor="price">Price From: </label>
            <input type="range" id='price' min='0' max='999' onChange={handleChangeMinPrice} value={priceFiltered} className=' border appearance-none bg-black rounded-lg '/>
            <span>${priceFiltered}</span>
        </div>
    </div>
  )
}
