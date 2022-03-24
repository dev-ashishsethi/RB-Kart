// import "./App.css";
import {Nav} from "./pages/Nav/Nav"
import {Home} from "./pages/Home/home"
import {Route,Link,Routes} from "react-router-dom"
import { products } from "./backend/db/products";
import { ProductListing } from "./pages/ProductListing/ProductListing";

import { Footer } from "./pages/Footer/Footer";
import { useCategory } from "./context/ProductContext";
function App() {
  // const {category,setCategory}=useCategory();
  
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ProductListing" element={<ProductListing />}/>       
      </Routes>

      
      <Footer/>
     
    </div>
  );
}

export default App;
