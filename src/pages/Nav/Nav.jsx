import "./nav.css";
import * as All from "../../assets/icons/icons.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Authentication";
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishlistContext";
import { useSearch } from "../../context/SearchContext";

export function Nav() {
  const { cart } = useCart();
  const { login, setLogin } = useAuth();
  const location = useLocation();
  const { wishList } = useWishList();
  const navigate = useNavigate();
  const { setSearchTerm } = useSearch();

  const loginText = () => {
    return login === false ? "Log In" : "Log Out";
  };

  const onClickHandler = () => {
    if (login) {
      localStorage.removeItem("loginToken");
      setLogin(false);
    }
  };

  const SearchHandler = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
      navigate("/search");
    } else {
      setSearchTerm("");
    }
  };

  return (
    <main>
      <nav className="nav-container">
        <Link to="./">
          <p className="nav-title">
            R<span className="nav-title-short">&</span>B{" "}
            <span className="nav-title-short">Store</span>
          </p>
        </Link>

        <div className="input-box">
          <All.IcBaselineSearch />
          <input
            type="text"
            className=" store-input-box"
            placeholder="Search the merch"
            id="email"
            onKeyDown={(e) => SearchHandler(e)}
          />
        </div>

        <div className="nav-side">
          <div className="badges">
            <Link to="./Wishlist">
              {" "}
              <All.PhHeartStraightFill className="navbar-icons" />
              {wishList.length > 0 && (
                <div className="wishlist-badge">{wishList.length}</div>
              )}
            </Link>
          </div>
          {/** TODO: update links */}
          <div className="badges">
            <Link to="./Cart">
              <All.IcRoundShoppingCart className="navbar-icons" />
              {cart.length > 0 && (
                <div className="wishlist-badge">{cart.length}</div>
              )}
            </Link>
            {/** TODO: update links */}
          </div>
          <Link
            to={
              !login &&
              location.pathname !== "/signIn" &&
              location.pathname !== "/signUp"
                ? "/signIn"
                : ""
            }
          >
            {" "}
            <button className="btn btn-primary" onClick={onClickHandler}>
              {loginText()}
            </button>
          </Link>
          {/** TODO: update links */}
        </div>
      </nav>
    </main>
  );
}
