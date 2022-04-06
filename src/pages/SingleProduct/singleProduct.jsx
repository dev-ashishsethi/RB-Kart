import "./singleProduct.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishlistContext";
import * as All from "../../assets/icons/icons.jsx";

export function SingleProduct() {
  const { productID } = useParams();
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useCart();
  const { wishList, setWishList } = useWishList();
  const [addedToWishlist, setAddedToWishlist] = useState(false);

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

  const onClickHandler = (items) => {
    itemsInCart(items._id) ? navigate("/Cart") : addToCart(items);
    console.log(itemsInCart(items._id));
  };
  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      setProducts(
        response.data.products.find((products) => products._id === productID)
      );
    })();
  }, []);

  const itemsInCart = (productId) => {
    return cart.some((cartItem) => cartItem._id === productId);
  };
  const itemsInWishlist = (productId) => {
    return wishList.some((cartItem) => cartItem._id === productId);
  };
  return (
    <div className="single-product">
      <img src={products.image} />
      <div className="single-product-details">
        <h1>{products.title}</h1>
        <p className="single-product-description">{products.description}</p>

        <section className="card-rating-container">
          <p className="single-product-rating">Rating: {products.rating}</p>
          <All.IcBaselineStar className="rating" />
        </section>
        <strong className="single-ecommerce-price">₹ {products.price}</strong>
        <div className="single-product-btn-section">
          <button
            className="btn btn-primary w-100"
            onClick={() => onClickHandler(products)}
          >
            {itemsInCart(products._id) ? "Go to Cart" : "Add to Cart"}
          </button>
          <button
            className="btn btn-secondary w-100"
            onClick={() =>
              addedToWishlist
                ? removeFromWishlist(products._id)
                : addToWishList(products)
            }
          >
            Add To WishList
          </button>
        </div>
      </div>
    </div>
  );
}
