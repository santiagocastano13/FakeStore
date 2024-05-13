import { createContext, useState } from "react"

export const AppContext = createContext();
export const ContextProvider = ({ children }) => {

   
    const [filter, setFilter] = useState({
        category: 'all',
        minPrice: 0,
    });

    const filterProducts = (products) => {
        return products.filter(product =>{
            return(
                product.price >= filter.minPrice && (
                    filter.category === 'all' ||
                    product.category === filter.category
                )
            )
        })
    };

    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id);

        if (productInCartIndex >= 0) {
            const updateCart = [...cart];
            updateCart[productInCartIndex].quantity += 1;
            setCart(updateCart);
        }else {
            setCart(prevState =>[
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ]);
        } 
    };

    const removeFromCart = (productId) =>{
        const updateCart = cart.map(item =>{
            if (item.id === productId) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCart(updateCart);
    };


    const clearCart = () =>{
        setCart([]);
    };



  return (
    <AppContext.Provider value={{filterProducts, setFilter, filter, cart, addToCart, clearCart, removeFromCart}}>
        {children}
    </AppContext.Provider>
  )
}
