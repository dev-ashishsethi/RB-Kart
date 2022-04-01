export function filterProducts(state,action){
    
    switch(action.type){
        case "LOW_TO_HIGH":
            return {...state,
                low_to_High:true,
                High_to_low:false
             };
        case "HIGH_TO_LOW":
            return {...state,
                low_to_High:false,
                High_to_low:true
                
              };
        case "TSHIRT" :
            console.log("is check is",action.isChecked)
            switch(action.isChecked){
                case true:
                    
                    return {
                        ...state,
                        tshirt:action.isChecked
                    }
                case false:
                    console.log("ORIGINAL DATA-->",action.originalData,"state items",[...state.items]);
                    return {
                        ...state,
                        tshirt:action.isChecked
                    }
                
                default: return state
            }
            
        
        case "BOBBLE_HEADS":
            switch(action.isChecked){
                case true:
                return {
                  ...state,
                  bobble:action.isChecked
                };
                case false:
                    return {
                        ...state,
                        bobble:action.isChecked
                      };
            }
            case "BADGES":
            switch(action.isChecked){
                case true:
                return {
                  ...state,
                  badges:action.isChecked
                };
                case false:
                    return {
                        ...state,
                        badges:action.isChecked
                      };
            }

            case "STICKER":
            switch(action.isChecked){
                case true:
                return {
                  ...state,
                  sticker:action.isChecked
                };
                case false:
                    return {
                        ...state,
                        sticker:action.isChecked
                      };
            }

            case "RATING":
                switch(action.rating){
                    
                    case "1":
                        console.log("action rating",action.rating,"original data length",[...action.originalData].length,"state length",[...state.items].length)
                        return {
                            ...state,
                            rating_number:"1"
                        }
                    case "2":
                        
                        return {
                            ...state,
                            rating_number:"2"
                        }
                    case "3":
                        
                        return {
                            ...state,
                            rating_number:"3"
                        }
                    case "4":
                        
                        return {
                            ...state,
                            rating_number:"4"
                        }
                    case "5":
                        console.log("action rating",action.rating,"original data length",[...action.originalData].length,"state length",[...state.items].length)
                        return {
                            ...state,
                            rating_number:"5"
                        }
                }

        case "CLEAR":
            return {
                ...state,
                low_to_High:false,High_to_low:false,tshirt:false,bobble:false,badges:false,sticker:false,rating_number:"5"
            }
        case "ADD_FILTERED_DATA":
            return {
                ...state,
                items:action.payload
                
            }
    }
    return state;
}