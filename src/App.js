import "./App.css";
import {Nav} from "./pages/Nav/Nav"
import {Home} from "./pages/Home/Home"
import {Route,Link,Routes} from "react-router-dom"
import { products } from "./backend/db/products";
import { ProductListing } from "./pages/ProductListing/ProductListing";
import { Footer } from "./pages/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductListing" element={<ProductListing/>}/>
        
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
