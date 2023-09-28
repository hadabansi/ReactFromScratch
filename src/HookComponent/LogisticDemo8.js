import React, { useReducer } from 'react'

const initialstate=0;
const reducer=(state,action)=>{
    switch (action) {
        case 'Increment':
           return state+1;
        case 'Decrement':
           return state-1;
        case 'Reset':
           return initialstate;
        default:
            return state;
    }
}
function LogisticDemo8() {
    const[count,dispatch]=useReducer(reducer,initialstate)

const incfunc=()=>{
    dispatch('Increment');
}
const decfunc=()=>{
    dispatch('Decrement');
}
const resetfunc=()=>{
    dispatch('Reset');
}
  return (
    <div className='countdivcss'>
        <button onClick={incfunc}>+</button>
        {count}
        <button onClick={decfunc}>-</button>
    </div>
  )
}

export default LogisticDemo8