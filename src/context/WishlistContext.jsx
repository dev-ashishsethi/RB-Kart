import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishList, setWishList] = useState([]);
  return (
    <WishlistContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishlistContext.Provider>
  );
}

const useWishList = () => useContext(WishlistContext);

export { useWishList };
