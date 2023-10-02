    import { combineReducers } from "redux";
    import { cakereducers } from './cakeDemo/CakeReducers'
    import { icecreamReducer } from './IceCreamDemo/IceCreamReducer'
    import { userReducer } from "./AsyncDemo/UserReducer";

    export const rootreducer=combineReducers({
        cake:cakereducers,
        icecream:icecreamReducer,
        user:userReducer
    })