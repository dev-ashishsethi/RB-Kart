import { Nav } from "./pages/Nav/Nav";
import { Home } from "./pages/Home/home";
import { Route, Link, Routes } from "react-router-dom";
import { ProductListing } from "./pages/ProductListing/ProductListing";

import { Footer } from "./pages/Footer/Footer";

import Mockman from "mockman-js";
import { SignUp } from "./pages/Sign Up/signup";
import { SignIn } from "./pages/Sign In/signIn";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/wishList";
import { SingleProduct } from "./pages/SingleProduct/singleProduct.jsx";
import { NotFoundPage } from "./pages/404/404";
import { Search } from "./pages/Search/Search";
function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route
          path="/mockman"
          element={
            <div className="MockAPI">
              {" "}
              <Mockman />
            </div>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/ProductListing" element={<ProductListing />} />

        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
