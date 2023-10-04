import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import IceCreamSlice from "../features/icecream/IceCreamSlice";

 const store=configureStore({
    reducer:{
        cake:cakeSlice,
        icecream:IceCreamSlice
    }
})

export default store