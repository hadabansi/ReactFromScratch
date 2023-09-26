import React, { useReducer } from 'react'

const initialstate=0;
//simple state and action
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
function DemoUseReducer() {
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
    <div>
        Count - {count}
        <button onClick={incfunc}>Increment</button>
        <button onClick={decfunc}>Decrement</button>
        <button onClick={resetfunc}>Reset</button>
    </div>
  )
}

export default DemoUseReducer