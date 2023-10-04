import {createSlice} from '@reduxjs/toolkit'

const initialState={
    numOfIcecreams:10
}

const IceCreamSlice=createSlice(
    {
        name:'icecream',
        initialState,
        reducers:{
            ordered:(state)=>{
                state.numOfIcecreams--
            },
            restocked:(state,action)=>{
                state.numOfIcecreams+=action.payload
            },
        },
    }
)

export default IceCreamSlice.reducer;
export const {ordered,restocked}=IceCreamSlice.actions;