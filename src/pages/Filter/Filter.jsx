import * as All from "../../assets/icons/icons.jsx";
import { useFilter } from "../../context/FilterContext.jsx";

export function Filter(){
    const {}=useFilter();
    return (
        <div class="sidebar">
            <div class="filter">
                <h3 class="filter-heading">Filters</h3>
                <button class="btn btn-secondary">Clear</button>
            </div>
            <div class="section-line"></div>

            <div class="price-filter">
                <label for="l1" class="label">Price</label>
                <div class="input-section">
                    <input type="radio" name="l1" id="" class="radio-input"/>
                    <span class="radio-text"> Low to High</span> 
                </div>

                <div class="input-section">
                    <input type="radio" name="l1" id="" class="radio-input"/>
                    <span class="radio-text"> High to Low</span> 
                </div>
            </div>

            <div class="category-filter">
                <label for="l2" class="label">Categories</label>
                <div class="input-section">
                    <input type="checkbox" name="l2" id="" class="radio-input"/>
                    <span class="radio-text"> T-shirts</span> 
                </div>

                <div class="input-section">
                    <input type="checkbox" name="l2" id="" class="radio-input"/>
                    <span class="radio-text"> Bobble heads</span> 
                </div>

                <div class="input-section">
                    <input type="checkbox" name="l2" id="" class="radio-input"/>
                    <span class="radio-text"> Badges</span> 
                </div>

                <div class="input-section">
                    <input type="checkbox" name="l2" id="" class="radio-input"/>
                    <span class="radio-text"> Sticker</span> 
                </div>
            </div>


            <div class="input-section">
                <span class="rating-text">Rating</span>
                
                <div class="rating-container">
                        <input type="range" class="slider"  name="rating" id="rating-slider" min="1" max="5" defaultvalue="1"/>
                        <label for="rating" class="star-rating">
                            <span>
                                <All.IcBaselineStar className="star"/>
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                                
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                                
                            </span>
                            <span>
                            <All.IcBaselineStar className="star"/>
                                
                            </span>
                        </label>
                </div>
            </div>
        </div>
    )
}