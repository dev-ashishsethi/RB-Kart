// import "./App.css";
import {Nav} from "./pages/Nav/Nav"
import {Home} from "./pages/Home/home"
import {Route,Link,Routes} from "react-router-dom"
import { products } from "./backend/db/products";

import { Marvel } from "./pages/ProductListing/Marvel";
import { DragonBall } from "./pages/ProductListing/DragonBall";
import { HarryPotter } from "./pages/ProductListing/HarryPotter";
import { RickMorty } from "./pages/ProductListing/RickMorty";
import { Footer } from "./pages/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ProductListing/Marvel" element={<Marvel/>}/>
        <Route path="/ProductListing/DragonBall" element={<DragonBall/>}/>
        <Route path="/ProductListing/HarryPotter" element={<HarryPotter/>}/>
        <Route path="/ProductListing/RickMorty" element={<RickMorty/>}/>
        
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
