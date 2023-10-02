import { BUY_CAKE } from "./CakeTypes";

const intialState={
    numOfCakes:10
}

export const cakereducers=(state=intialState,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return {...state,numOfCakes:state.numOfCakes-action.payload}    
        default:
            return state;
    }
}