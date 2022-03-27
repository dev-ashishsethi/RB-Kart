import "./nav.css";
import * as All from "../../assets/icons/icons.jsx"
import {Route,Link,Routes, useLocation} from "react-router-dom"
import { useAuth } from "../../context/Authentication";
import { useState } from "react/cjs/react.production.min";
export function Nav(){
    const {login,setLogin}=useAuth();
    const location=useLocation();
    console.log(location.pathname)
    const loginText=()=>{
        return login===false?"Log In":"Log Out";
    }
    
    const onClickHandler=()=>{
        if(login){
            localStorage.removeItem("loginToken");
            setLogin(false);
        }        
    }

    return (
    <main>
        <nav className="nav-container">
            <Link to="./">
            <p className="nav-title">R<span className="nav-title-short">&</span>B <span className="nav-title-short">Store</span></p>
            </Link>

            <div className="input-box">
                <All.IcBaselineSearch/>
                <input type="text" className=" store-input-box" placeholder="Search the merch" id="email" />
            </div>

            <div className="nav-side">
                <Link to="./wishlist/wishlist.html"> <All.PhHeartStraightFill className="navbar-icons"/></Link>{/** TODO: update links */}
                <Link to="./Cart/cart.html"><All.IcRoundShoppingCart className="navbar-icons"/></Link>{/** TODO: update links */}
                <Link to={!login&&location.pathname!=="/signIn"&&location.pathname!=="/signUp"?"/signIn":""}> <button className="btn btn-primary" onClick={onClickHandler}>{loginText()}</button></Link>{/** TODO: update links */}
            </div>

        </nav>
    </main>
    )
}