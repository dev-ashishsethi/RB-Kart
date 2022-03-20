import { createContext, useContext, useReducer } from "react";
import {products} from "../backend/db/products"
import { filterProducts } from "./Functions/filterProducts";

const FilterContext=createContext()

function FilterProvider({children}){
    const [state,dispatch]=useReducer(filterProducts,{items:products})
    return ( 
    <FilterContext.Provider value={state,dispatch}>
        {children}
    </FilterContext.Provider>
    )
}

const useFilter=()=>useContext(FilterContext);
export {useFilter,FilterProvider}