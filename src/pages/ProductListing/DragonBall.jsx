import { Filter } from "../Filter/Filter";
import * as All from "../../assets/icons/icons.jsx";
import { useEffect, useState } from "react";
import axios from "axios";


export function DragonBall(){
    const [data,setData]=useState([])
    useEffect(()=>{
        (async ()=>{
            const response=await axios.get("/api/products");
            console.log(response.data.products);
        })();
    },[]);
    
    return (
    <div class="main-content">
    <Filter/>
    <div class="product-listing">
   
        
       <All.PhHeartStraightLight className="icon-on-card"/> 
        {data.map((items)=>(
             <div class="product-card">
                 <img src="..\assets\images\products\Marvel\image_37-removebg-preview.webp" alt=""
                     class="ecommerce-image" />
                 <h4 class="product-title">{items.author}</h4>
                 <p class="ecommerce-description">POP TV: Squid Game- Masked Worker Pre-Order Lorem ipsum dolor sit
                     amet
                     consectetur, adipisicing elit. Animi, amet.</p>

                 <div class="price-and-btn">
                     <strong class="ecommerce-price">₹ 999</strong>

                     <div class="product-btn-section">
                         <button class="btn btn-primary w-100">Add to Cart</button>
                     </div>
                 </div>
             </div>
        ))}
        
       
</div>
</div>
)
}