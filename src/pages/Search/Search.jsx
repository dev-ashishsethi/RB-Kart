import "./Search.css";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useSearch } from "../../context/SearchContext";
import { useWishList } from "../../context/WishlistContext";
import * as All from "../../assets/icons/icons.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Search() {
  const navigate = useNavigate();
  const { searchResult, searchTerm } = useSearch();
  const { cart, setCart } = useCart();
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const { wishList, setWishList } = useWishList();
  console.log("search component", searchResult);

  const itemsInCart = (productId) => {
    return cart.some((cartItem) => cartItem._id === productId);
  };

  const itemsInWishlist = (productId) => {
    return wishList.some((cartItem) => cartItem._id === productId);
  };
  const addToCart = (items) => {
    const token = localStorage.getItem("login");
    console.log("items", items);
    (async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "/api/user/cart",
          data: { product: items },
          headers: { authorization: token },
        });
        setCart(response.data.cart);
      } catch (error) {
        console.error(error);
      }
    })();
  };
  const addToWishList = (items) => {
    const token = localStorage.getItem("login");
    console.log("items", items);
    (async () => {
      try {
        const response = await axios({
          method: "POST",
          url: "/api/user/wishlist",
          data: { product: items },
          headers: { authorization: token },
        });
        console.log(response.data);
        setWishList(response.data.wishlist);
        setAddedToWishlist(true);
      } catch (error) {
        console.error(error);
      }
    })();
  };
  const onClickHandler = (items) => {
    itemsInCart(items._id) ? navigate("/Cart") : addToCart(items);
    console.log(itemsInCart(items._id));
  };
  const removeFromWishlist = (productid) => {
    (async () => {
      try {
        const token = localStorage.getItem("login");
        const res = await axios({
          method: "DELETE",
          url: `/api/user/wishlist/${productid}`,
          headers: { authorization: token },
        });
        setWishList(res.data.wishlist);
        setAddedToWishlist(false);
        console.log("response from delete", res.data.wishlist);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <div className="search-container">
      <h1 className="search-heading">
        {searchResult.length > 0 && searchTerm.length > 0
          ? "Your search results are here"
          : "No results to show"}
      </h1>
      <div className="product-listing">
        {searchTerm.length > 0 && searchResult.length > 0
          ? searchResult.map((items) => (
              <div className="product-card" key={items._id}>
                {itemsInWishlist(items._id) === true ? (
                  <All.PhHeartStraightFill
                    className="icon-on-card"
                    onClick={() =>
                      addedToWishlist
                        ? removeFromWishlist(items._id)
                        : addToWishList(items)
                    }
                  />
                ) : (
                  <All.PhHeartStraightLight
                    className="icon-on-card"
                    onClick={() =>
                      addedToWishlist
                        ? removeFromWishlist(items._id)
                        : addToWishList(items)
                    }
                  />
                )}
                <Link to={`/product/${items._id}`} className="link-on-card">
                  <img src={items.image} alt="" className="ecommerce-image" />

                  <section className="card-rating-container">
                    <h4 className="rating-card-text">{items.rating} </h4>
                    <All.IcBaselineStar className="rating" />
                  </section>

                  <h4 className="product-title">{items.title}</h4>
                  <p className="ecommerce-description">{items.description}</p>
                </Link>
                <div className="price-and-btn">
                  <strong className="ecommerce-price">₹ {items.price}</strong>

                  <div className="product-btn-section">
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => onClickHandler(items)}
                    >
                      {itemsInCart(items._id) ? "Go to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
