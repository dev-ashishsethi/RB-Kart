import "./nav.css";
import * as All from "../../assets/icons/icons.jsx"
import {Route,Link,Routes} from "react-router-dom"
export function Nav(){
    return (
    <main>
        <nav className="nav-container">
            <Link to="./Home">
            <p className="nav-title">R<span className="nav-title-short">&</span>B <span className="nav-title-short">Store</span></p>
            </Link>

            <div className="input-box">
                <All.IcBaselineSearch/>
                <input type="text" className=" store-input-box" placeholder="Search the merch" id="email" />
            </div>

            <div className="nav-side">
                <Link to="./wishlist/wishlist.html"> <All.PhHeartStraightFill className="navbar-icons"/></Link>{/** TODO: update links */}
                <Link to="./Cart/cart.html"><All.IcRoundShoppingCart className="navbar-icons"/></Link>{/** TODO: update links */}
                <Link to=".\signIn and SignUp\signIn.html"> <button className="btn btn-primary">Log In</button></Link>{/** TODO: update links */}
            </div>

        </nav>
    </main>
    )
}