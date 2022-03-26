import { createContext, useContext, useState } from "react";

const ProductContext=createContext();

function ProductProvider({children}){
    const [category,setCategory]=useState("");
    return <ProductContext.Provider value={{category,setCategory}}>{children}</ProductContext.Provider>
}

const useCategory=()=>useContext(ProductContext);

export {useCategory,ProductProvider};