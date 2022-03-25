import * as All from "../../assets/icons/icons.jsx";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./productListing.css"
import { useCategory } from "../../context/ProductContext";
// import { useFilter } from "../../context/FilterContext";
import { filterProducts } from "../../context/Functions/filterProducts.jsx";

export function ProductListing(){
    const {category}=useCategory();
    const [state,dispatch]=useReducer(filterProducts,{items:[],low_to_High:false,High_to_low:false,tshirt:false,bobble:false,badges:false,sticker:false,rating_number:"1"});
    
    const [tempData,setTempData]=useState("");
    
    useEffect(()=>{
        (async ()=>{
            const response=await axios.get("/api/products");        
            let initialData=response.data.products.filter(products=>products.genre===category);
            setTempData(initialData);
            dispatch({type:"ADD_FILTERED_DATA",payload:initialData});
        })();
        
    },[]);
    //onClick={()=>dis}
    console.log("state",state.items)
    console.log("low to high--->",state.low_to_High,"high to low-->",state.High_to_low)
    return (
        
    <div className="main-content">
    <div className="sidebar">
            <div className="filter">
                <h3 className="filter-heading">Filters</h3>
                <button className="btn btn-secondary" onClick={()=>dispatch({type: "STICKER" ,items:state.items, originalData:tempData})}>Clear</button>
            </div>
            <div className="section-line"></div>

            <div className="price-filter">
                <label  className="label">Price</label>
                <div className="input-section">
                    <input type="radio" name="sorting" id="LOW_TO_HIGH" className="radio-input"  onChange={(e)=>dispatch({type:"LOW_TO_HIGH",items:state.items,isChecked:e.target.checked})}/>
                    <label className="radio-text" htmlFor="LOW_TO_HIGH"> Low to High</label> 
                </div>

                <div className="input-section">
                    <input type="radio" name="sorting" id="HIGH_TO_LOW" className="radio-input"  onChange={(e)=>dispatch({type:"HIGH_TO_LOW",items:state.items,isChecked:e.target.checked})}/>
                    <label className="radio-text" htmlFor="HIGH_TO_LOW" > High to Low</label> 
                </div>
            </div>

            <div className="category-filter">
                <label htmlFor="categories" className="label">Categories</label>
                <div className="input-section">
                    <input type="checkbox" id="TSHIRT" name="categories" className="radio-input" checked={state.tshirt} value="TSHIRT" onChange={(e) => dispatch({ type: "TSHIRT", items:state.items,isChecked:e.target.checked,originalData:tempData})}/>
                    <label className="radio-text" htmlFor="TSHIRT" > T-shirts</label> 
                </div>

                <div className="input-section">
                    <input type="checkbox" name="categories" id="BOBBLE_HEADS" className="radio-input" checked={state.bobble} onChange={(e) => dispatch({ type: "BOBBLE_HEADS" ,items:state.items,originalData:tempData,isChecked:e.target.checked})}/>
                    <label className="radio-text" htmlFor="BOBBLE_HEADS"> Bobble heads</label> 
                </div>

                <div className="input-section">
                    <input type="checkbox" name="categories" id="BADGES" checked={state.badges} className="radio-input" onChange={(e) => dispatch({ type: "BADGES" ,items:state.items, originalData:tempData, isChecked:e.target.checked})}/>
                    <label className="radio-text" htmlFor="BADGES"> Badges</label> 
                </div>

                <div className="input-section">
                    <input type="checkbox" name="categories" id="STICKER" checked={state.sticker} className="radio-input" onChange={(e) => dispatch({ type: "STICKER" ,items:state.items, originalData:tempData, isChecked:e.target.checked})}/>
                    <label className="radio-text" htmlFor="STICKER"> Sticker</label> 
                </div>
            </div>


            <div className="input-section">
                <span className="rating-text">Rating</span>
                
                <div className="rating-container">
                        <input type="range" className="slider"  name="rating" id="rating-slider" min="1" max="5" defaultValue="1"  onChange={(e) => dispatch({ type: "RATING" ,items:state.items, originalData:tempData, rating:e.target.value})}/>
                        <label htmlFor="rating" className="star-rating">
                            <span>
                                <All.IcBaselineStar className="star"/>
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                                
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                                
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                                
                            </span>
                        </label>
                </div>
            </div>
        </div>
    <div className="product-listing">
        
        {state.items && state.items.map((items)=>(
             <div className="product-card" key={items._id}>
                  <All.PhHeartStraightLight className="icon-on-card"/>
                 <img src={items.image} alt="" className="ecommerce-image" />
                 
                 <section className="card-rating-container">
                 <h4 className="rating-card-text">{items.rating} </h4>
                 <All.IcBaselineStar className="rating"/>
                 </section>

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