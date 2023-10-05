// import {logger} from 'redux-logger';
// import { createStore,applyMiddleware} from 'redux'
// import { rootreducer } from './RootReducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// export const store=createStore(rootreducer,composeWithDevTools(applyMiddleware(logger,thunk)))

import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../ReduxToolkitComponent/features/cake/cakeSlice";
import IceCreamSlice from "../ReduxToolkitComponent/features/icecream/IceCreamSlice";
import UserSlice from "../ReduxToolkitComponent/features/user/UserSlice";
import counterSlice from "../ReduxToolkitComponent/features/demo/counterSlice";
import dropdownSlice from "../ReduxToolkitComponent/features/demo16/dropdownSlice";
import inputSlice from "../ReduxToolkitComponent/features/demo16/inputSlice";
import checkboxSlice from "../ReduxToolkitComponent/features/demo16/checkboxSlice";

 const store=configureStore({
    reducer:{
        cake:cakeSlice,
        icecream:IceCreamSlice,
        counter:counterSlice,
        user:UserSlice,
        dropdown:dropdownSlice,
        inputval:inputSlice,
        checkboxval:checkboxSlice
    }
})

export default store