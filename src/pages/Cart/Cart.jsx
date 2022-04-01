import axios from "axios";
import { useEffect, useReducer, useState } from "react/cjs/react.development";

import { useAuth } from "../../context/Authentication";
import { useCart } from "../../context/CartContext";
import * as All from "../../assets/icons/icons.jsx";
import "./cart.css"
import { cartFn } from "./cartFn";
// import { removeItemFromCartHandler } from "../../backend/controllers/CartController";


 export function Cart(){
  
    const [btnDisable,setBtnDisable]=useState(false);
     const {cart,setCart}=useCart();
     const {login}=useAuth();
     const [state,dispatch]=useReducer(cartFn,{items:[],qty:1,subTotal:0});
    
    
    const removeHandler=(productid)=>{
        (async ()=>{
            try {
                
                const token=localStorage.getItem("login");
                const res= await axios({method:"DELETE",url:`/api/user/cart/${productid}`,headers:{authorization:token}});
                setCart(res.data.cart);
                console.log("response from delete",res.data.cart);
                dispatch({type:"INCREASE",payload:res.data.cart!==undefined?res.data.cart:[]});
                
            } catch (error) {
                console.error(error);
            }
        })()
    }

    const increaseHandler=(productid)=>{
        
        (async ()=>{
            try {
                setBtnDisable(true);
                const token=localStorage.getItem("login");
               const res= await axios({method:"POST",url:`/api/user/cart/${productid}`,data:{action:{type:"increment"}},headers:{authorization:token}});
               setCart(res.data.cart);
               console.log("response",res.data.cart);
               dispatch({type:"INCREASE",payload:res.data.cart!==undefined?res.data.cart:[],initialQty:res.data.cart[0].qty});
               
               setBtnDisable(false);
            } catch (error) {
                console.error(error);
            }
        })()
    }

 
    const decreaseHandler=(productid)=>{
        (async ()=>{
            try {
                setBtnDisable(true);
                const token=localStorage.getItem("login");
               const res= await axios({method:"POST",url:`/api/user/cart/${productid}`,data:{action:{type:"decrement"}},headers:{authorization:token}});
               setCart(res.data.cart);
               console.log("response from post",res);
               dispatch({type:"SUBTRACT",payload:res.data.cart});
               setBtnDisable(false);
            } catch (error) {
                console.error(error);
            }
        })()
    }
    
    

     useEffect(()=>{
         const token=localStorage.getItem("login");
         console.log("login-->",login,"token is",token);
        (async ()=>{
            try {
                const res=await axios({method:"GET",url:"/api/user/cart",headers:{authorization:token}});    
                setCart(res.data.cart);
                dispatch({type:"INITIAL",payload:res.data.cart});
            } catch (error) {
                console.error(error);
            }
        })();
     },[]);

 
     return(
         <div>
          
             {
                cart.length===0?
                <h1 className="cart-title">Your Shopping Cart is empty</h1>:
                <h1 className="cart-title">Your Shopping Cart</h1>
             }
        

    <div className="cart-container">
    <div className="products">
        
        
        {cart.map((items)=>(
            
            <div className="product-card-horizontal" key={items._id}>
                <div className="image-section">
                    <img src={items.image} alt=""
                        className="ecommerce-image"/>
                    <i className="far fa-heart icon-on-horizontal-card"/>
                </div>
                {/* <i className="fas fa-times icon-on-card"/> */}
                <All.MakiCross11 className="icon-on-card" onClick={()=>removeHandler(items._id)}/>
                <div className="horizontal-card-details">
                    <h4 className="product-title">{items.title}</h4>
                    <p className="ecommerce-description">{items.description}</p>
                    
                    <div className="qty-section">
                        <button className="btn btn-primary" id="decrease-qty" onClick={()=>decreaseHandler(items._id)} disabled={items.qty===1||btnDisable}>-</button>
                        <span className="qty-number">{items.qty}</span>
                        <button className="btn btn-primary" id="increase-qty" onClick={()=>increaseHandler(items._id)}  disabled={items.qty===10||btnDisable}>+</button>
                    </div>
                    
                    
                    <div className="price-and-btn">
                        <strong className="ecommerce-price">₹ {items.price}</strong>
    
                        <div className="product-btn-section">
                            <button className="btn btn-primary w-100">Move to whishlist</button>
                        </div>
                    </div>
                </div>
            </div>
    
        
        ))
    
    }
</div>
{cart.length>0 && <div className="checkout">
        <div className="product-card">
            
                <h4 className="product-title">Promo Code</h4>
                <div className="coupon-section">
                    <input type="text" className="coupon-box" placeholder="Enter Coupon Code" id="email"/>
                    <button className="btn btn-primary" id="apply-coupon">Apply</button>
                </div>

                <div className="section-line"></div>

                    <div className="price-summary">
                        <span className="price-description">Sub Total</span>
                        <strong className="price">₹ {state.subTotal.price}</strong>
                    </div>
            

                    <div className="price-summary">
                        <span className="price-description">Delivery charges</span>
                        
                        <span className="price">
                            <strong className="price" id="delivery-charge">₹ 0</strong>
                            <strong className="price">FREE</strong>
                        </span>
                        
                    </div>
                   
                    <div className="checkout-section-line"></div>

                    <div className="price-summary">
                        <strong className="price-description">Grand Total</strong>
                        <strong className="price">₹ {state.subTotal.price}</strong>
                    </div>

                        <div className="product-btn-section">
                            <button className="btn btn-primary w-100">Checkout</button>
                        </div>
                   
        </div>
    </div>}
</div>
</div>
     )
 }