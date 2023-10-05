import { createSlice } from "@reduxjs/toolkit";

const inputSlice=createSlice({
    name:'input',
    initialState:{
        initialvalue:''
    },
    reducers:{
        changeinputvalue:(state,action)=>{
            state.initialvalue=action.payload
        }
    }
})

export const {changeinputvalue} =inputSlice.actions;
export default inputSlice.reducer;