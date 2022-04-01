import { createContext, useContext, useState } from "react/cjs/react.development";


const CartContext=createContext();

export function CartProvider({children}){
    const [cart, setCart]=useState([]);
    return <CartContext.Provider value={{cart,setCart}}>
        {children}
    </CartContext.Provider> 
}
const useCart=()=>useContext(CartContext);

export {useCart};