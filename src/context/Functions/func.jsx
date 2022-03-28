export function sorting(data,low_to_High,High_to_low){
    if(low_to_High===true&&High_to_low===false){
        return [...data].sort((a, b) =>a.price-b.price);
    }
    if(low_to_High===false&&High_to_low===true){
        return [...data].sort((a, b) =>b.price-a.price);
    }
    return [...data];
}

export function categoryFilter(sortedData,tshirt,bobble,badges,sticker){
    const filteredData=[];
    
    if(tshirt===false&&bobble===false&&badges===false&&sticker===false){
        return sortedData;
    }

    if(tshirt===true){

        const data=[...sortedData].filter((ele) => ele.categoryName === "T-Shirt");
        console.log("when t-shirt is true",filteredData.concat(data))
         filteredData.push(...data);

    }
    if(bobble===true){
        
        const data=[...sortedData].filter((ele) => ele.categoryName === "Bobble head");
        console.log("type of filtered data",typeof(filteredData));
         filteredData.push(...data);
    }

    if(badges){
    
        const data=[...sortedData].filter((ele) => ele.categoryName === "Badge");
         filteredData.push(...data);
    }
    if(sticker){
        
        const data=[...sortedData].filter((ele) => ele.categoryName === "Sticker");
         filteredData.push(...data);
    }
    return [...filteredData];
}

export function priceFilter(data,rating_number){
    return [...data.items].filter((ele) => Number(ele.rating) <= Number(rating_number));
}

