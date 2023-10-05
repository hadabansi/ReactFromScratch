import { createSlice } from "@reduxjs/toolkit";

const checkboxSlice=createSlice({
    name:'checkbox',
    initialState:{
        chone:false,
        chtwo:false,
        chthree:false,
    },
    reducers:{
        managecheckbox1:(state,action)=>{
            state.chone=action.payload
        },
        managecheckbox2:(state,action)=>{
            state.chtwo=action.payload;
        },
        managecheckbox3:(state,action)=>{
            state.chthree=action.payload
        },
        
    }
})

export const {managecheckbox1,managecheckbox2,managecheckbox3}=checkboxSlice.actions;
export default checkboxSlice.reducer;