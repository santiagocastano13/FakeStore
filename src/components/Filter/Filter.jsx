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
    <div>

        <div>
            <label htmlFor="price">Price From: </label>
            <input type="range" id='price' min='0' max='999' onChange={handleChangeMinPrice} value={priceFiltered}/>
            <span>${priceFiltered}</span>
        </div>
        <div>
            <label htmlFor="category">Category</label>
            <select id="category" onChange={handleChangeCatrgory}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
            </select>
        </div>
    </div>
  )
}
