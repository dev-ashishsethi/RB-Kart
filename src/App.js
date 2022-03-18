import "./App.css";
import {Home} from "./pages/Home/home"
import {Route,Link,Routes} from "react-router-dom"
import { products } from "./backend/db/products";
import { ProductListing } from "./pages/ProductListing/ProductListing";
function App() {
  return (
    <div className="App">

      <Link to="./Home">Home</Link>
      <Link to="./Product">Product</Link>

      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Product" element={<ProductListing/>}/>
      </Routes>
    </div>
  );
}

export default App;
