import { Filter } from "../Filter/Filter";
import * as All from "../../assets/icons/icons.jsx";
import { useEffect, useState } from "react";
import axios from "axios";


export function DragonBall(){
    const [data,setData]=useState([])
    useEffect(()=>{
        (async ()=>{
            const response=await axios.get("/api/products");
            setData(response.data.products);
        })();
    },[]);
    
    return (
    <div className="main-content">
    <Filter/>
    <div className="product-listing">
   
        
       <All.PhHeartStraightLight className="icon-on-card"/> 
        {data.map((items)=>(
             <div className="product-card">
                 <img src={items.image} alt=""
                     className="ecommerce-image" />
                 <h4 className="product-title">{items.title}</h4>
                 <p className="ecommerce-description">{items.description}</p>

                 <div className="price-and-btn">
                     <strong className="ecommerce-price">₹ {items.price}</strong>

                     <div className="product-btn-section">
                         <button className="btn btn-primary w-100">Add to Cart</button>
                     </div>
                 </div>
             </div>
        ))}
        
       
</div>
</div>
)
}