import { BUY_ICECREAM } from "./IceCreamTypes";

const intialState={
    numOfIceCream:10
}

export const icecreamReducer=(state=intialState,action)=>{
    switch (action.type) {
        case BUY_ICECREAM:
            return {...state,numOfIceCream:state.numOfIceCream-1}    
        default:
            return state;
    }
}