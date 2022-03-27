export function filterProducts(state,action){
    
    switch(action.type){
        case "LOW_TO_HIGH":
            return {...state,
                items: [...state.items].sort((a, b) =>a.price-b.price),
                low_to_High:true,
                High_to_low:false
             } ;
        case "HIGH_TO_LOW":
            return {...state,
                items: [...state.items].sort((a, b) =>b.price-a.price),
                low_to_High:false,
                High_to_low:true
                
              };
        case "TSHIRT" :
            console.log("is check is",action.isChecked)
            switch(action.isChecked){
                case true:
                    
                    return {
                        ...state,
                        items: [...state.items].length===[...action.originalData].length?[...state.items].filter((ele) => ele.categoryName === "T-Shirt"):[...state.items].concat([...action.originalData].filter((ele) => ele.categoryName === "T-Shirt")),
                        tshirt:action.isChecked
                    }
                case false:
                    console.log("ORIGINAL DATA-->",action.originalData,"state items",[...state.items]);
                    return {
                        ...state,
                        items:[...state.items].filter((ele) => ele.categoryName !== "T-Shirt").length===0?[...action.originalData]:[...state.items].filter((ele) => ele.categoryName !== "T-Shirt"),
                        tshirt:action.isChecked
                    }
                
                default: return state
            }
            
        
        case "BOBBLE_HEADS":
            switch(action.isChecked){
                case true:
                return {
                  ...state,
                  items: [...state.items].length===[...action.originalData].length?[...state.items].filter((ele) => ele.categoryName === "Bobble head"):[...state.items].concat([...action.originalData].filter((ele) => ele.categoryName === "Bobble head")),
                  bobble:action.isChecked
                };
                case false:
                    return {
                        ...state,
                        items: [...state.items].filter((ele) => ele.categoryName !== "Bobble head").length===0?[...action.originalData]:[...state.items].filter((ele) => ele.categoryName !== "Bobble head"),
                        bobble:action.isChecked
                      };
            }
            case "BADGES":
            switch(action.isChecked){
                case true:
                return {
                  ...state,
                  items: [...state.items].length===[...action.originalData].length?[...state.items].filter((ele) => ele.categoryName === "Badge"):[...state.items].concat([...action.originalData].filter((ele) => ele.categoryName === "Badge")),
                  badges:action.isChecked
                };
                case false:
                    return {
                        ...state,
                        items: [...state.items].filter((ele) => ele.categoryName !== "Badge").length===0?[...action.originalData]:[...state.items].filter((ele) => ele.categoryName !== "Badge"),
                        badges:action.isChecked
                      };
            }

            case "STICKER":
            switch(action.isChecked){
                case true:
                return {
                  ...state,
                  items: [...state.items].length===[...action.originalData].length?[...state.items].filter((ele) => ele.categoryName === "Sticker"):[...state.items].concat([...action.originalData].filter((ele) => ele.categoryName === "Sticker")),
                  sticker:action.isChecked
                };
                case false:
                    return {
                        ...state,
                        items: [...state.items].filter((ele) => ele.categoryName !== "Sticker").length===0?[...action.originalData]:[...state.items].filter((ele) => ele.categoryName !== "Sticker"),
                        sticker:action.isChecked
                      };
            }

            case "RATING":
                switch(action.rating){
                    
                    case "1":
                        console.log("action rating",action.rating,"original data length",[...action.originalData].length,"state length",[...state.items].length)
                        return {
                            ...state,
                            items: [...action.originalData].filter((ele) => Number(ele.rating) === 1),
                            rating_number:"1"
                        }
                    case "2":
                        
                        return {
                            ...state,
                            items: [...action.originalData].filter((ele) => Number(ele.rating) <= 2),
                            rating_number:"2"
                        }
                    case "3":
                        
                        return {
                            ...state,
                            items: [...action.originalData].filter((ele) => Number(ele.rating) <= 3),
                            rating_number:"3"
                        }
                    case "4":
                        
                        return {
                            ...state,
                            items: [...action.originalData].filter((ele) => Number(ele.rating) <= 4),
                            rating_number:"4"
                        }
                    case "5":
                        console.log("action rating",action.rating,"original data length",[...action.originalData].length,"state length",[...state.items].length)
                        return {
                            ...state,
                            items: [...action.originalData].filter((ele) => Number(ele.rating) <= 5),
                            rating_number:"5"
                        }
                }

        case "CLEAR":
            return {
                ...state,
                items:[...action.originalData],
                low_to_High:false,High_to_low:false,tshirt:false,bobble:false,badges:false,sticker:false,rating_number:"1"
            }
        case "ADD_FILTERED_DATA":
            return {
                ...state,
                items:action.payload
                
            }
    }
    return state;
}