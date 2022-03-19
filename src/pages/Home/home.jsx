import "../Nav/nav.css";
import * as All from "../../assets/icons/icons.jsx";
import { carousel } from "./carousel";
import {Route,Link,Routes} from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";



export function Home(){
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
            setInterval(() => {
                setCarousel(carousel[i].image);
                i+=1;
                i>3?i=1:i=i;
            }, 3000)
       
    },[])
    return (
    <main>
        <div className="img-carousel">
        <img src={carouselImage} alt="" className="image" id="carousel"/>
        </div>

    <div className="product-categories">
        <h1 className="product-category-title">Choose your favourite </h1>
        <div className="category-cards">
        {data.map(category=>(
            <div key={category.id}>
                
            <div className="card card-align-item-start">
                <img src={category.image} alt="" className="category-image"/>
                
                <div className="btn-section">
                 <Link to="./ProductListing"> <button className="btn btn-primary">View Products</button></Link>
                </div>
            </div>
            </div>
        )

        )}
        </div>
        </div>
   
    </main>
        
    
    )
}