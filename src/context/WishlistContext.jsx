import { createContext, useContext, useState, useReducer } from "react";
import { cartFn } from "../pages/Cart/cartFn";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishList, setWishList] = useState([]);
  const [state, dispatch] = useReducer(cartFn, {
    items: [],
    qty: 1,
    subTotal: 0,
  });
  return (
    <WishlistContext.Provider
      value={{ wishList, setWishList, state, dispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

const useWishList = () => useContext(WishlistContext);

export { useWishList };
