export function filterProducts(state,action){
    // const orginalState=state.items;
    // console.log("original state",state);
    // const temp=action.originalData;
    switch(action.type){
        case "LOW_TO_HIGH":
            return {...state,
                items: [...state.items].sort((a, b) =>a.price-b.price)
             } ;
        case "HIGH_TO_LOW":
            return {...state,
                items: [...state.items].sort((a, b) =>b.price-a.price)
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
            // [...state.items].length===0?[...action.originalData]:[...state.items].filter((ele) => ele.categoryName !== "T-Shirt"),
        
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

        case "ADD_FILTERED_DATA":
            return {
                ...state,
                items:action.payload
            }
    }
    return state;
}

// state.items.filter((ele) => {
//     return ele.categoryName === "T-shirt";
//    })