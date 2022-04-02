import { useEffect, useReducer, useState } from "react";
import { useWishList } from "../../context/WishlistContext";
import { MakiCross11 } from "../../assets/icons/icons.jsx";
import "./wishList.css";
import axios from "axios";
import { useCart } from "../../context/CartContext";
// import { cartFn } from "../Cart/cartFn";

export function Wishlist() {
  const { wishList, setWishList } = useWishList();
  const { cart, setCart } = useCart();
  const { state, dispatch } = useWishList();
  const removeHandler = (productid) => {
    (async () => {
      try {
        const token = localStorage.getItem("login");
        const res = await axios({
          method: "DELETE",
          url: `/api/user/wishlist/${productid}`,
          headers: { authorization: token },
        });
        setWishList(res.data.wishlist);
        console.log("response from delete", res.data.wishlist);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  useEffect(() => {
    const token = localStorage.getItem("login");

    (async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "/api/user/wishlist",
          headers: { authorization: token },
        });
        setWishList(res.data.wishlist);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const itemsInCart = (productId) => {
    return cart.some((cartItem) => cartItem._id === productId);
  };

  const addToCart = (items) => {
    console.log("INSIDE aDD TO CART");
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

  const increaseHandler = (productid) => {
    console.log("INSIDE INCREASE HANDLER");
    (async () => {
      try {
        const token = localStorage.getItem("login");
        const res = await axios({
          method: "POST",
          url: `/api/user/cart/${productid}`,
          data: { action: { type: "increment" } },
          headers: { authorization: token },
        });
        setCart(res.data.cart);
        console.log("response", res.data.cart);
        dispatch({
          type: "INITIAL",
          payload: res.data.cart !== undefined ? res.data.cart : [],
          initialQty: res.data.cart[0].qty,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  };
  return (
    <div>
      {wishList.length > 0 ? (
        <h1 className="wishlist-title">Your Wishlist</h1>
      ) : (
        <h1 className="wishlist-title">Your Wishlist is empty</h1>
      )}

      <div className="wishlist-container">
        {wishList.length > 0 &&
          wishList.map((items) => (
            <div className="product-card" key={items._id}>
              <img src={items.image} alt="" className="ecommerce-image" />

              <MakiCross11
                className="icon-on-card"
                onClick={() => removeHandler(items._id)}
              />
              <h4 className="product-title">{items.title}</h4>
              <p className="ecommerce-description">{items.description}</p>
              <div className="price-and-btn">
                <strong className="ecommerce-price">₹ {items.price}</strong>

                <div className="product-btn-section">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() =>
                      itemsInCart(items._id)
                        ? increaseHandler(items._id)
                        : addToCart(items)
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
