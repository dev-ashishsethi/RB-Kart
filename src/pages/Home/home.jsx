import "../Nav/nav.css";
import { carousel } from "./carousel";
import {Route,Link,Routes} from "react-router-dom"
import axios from "axios";
import { useEffect, useState} from "react";
import { useCategory } from "../../context/ProductContext";


export function Home(){
    const {setCategory}=useCategory();
    
    const [data,setData]=useState([])
    const [carouselImage,setCarousel]=useState(carousel[0].image)
    useEffect(()=>{
        (async ()=>{
            try {
                const response=await axios.get("/api/categories");
                setData(response.data.categories);
            } catch (error) {
                console.error(error);
            }
        })();
        
        let i=1;
            const timerId=setInterval(() => {
                setCarousel(carousel[i].image);
                ++i;
                i>carousel.length-1?i=1:i=i;
            }, 3000)
            return (()=>clearInterval(timerId));
    },[])
    return (
    <main>
        <div className="img-carousel">
        <img src={carouselImage} alt="" className="image" id="carousel"/>
        </div>

    <div className="product-categories">
        <h1 className="product-category-title">Choose your favourite </h1>
        <div className="category-cards">
        {data.map(item=>(
        
        <div className="card card-align-item-start"  key={item.id}>
                <img src={item.image} alt="" className="category-image"/>
                
                <div className="btn-section">
                 <Link to={item.link} onClick={()=>setCategory(update=>item.categoryName)}> <button className="btn btn-primary">View Products</button></Link>
                </div>
            </div>
        )
        )}
        </div>
        </div>
   
    </main>
        
    
    )
}