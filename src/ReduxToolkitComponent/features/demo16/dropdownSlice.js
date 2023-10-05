import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice=createSlice({
    name:'dropdown',
    initialState:{selectvalue:0},
    reducers:{
        selecteddropdown:(state,action)=>{
            console.log('Action Payload:', action.payload);
                state.selectvalue=action.payload;
        }
    }
})

export const { selecteddropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;