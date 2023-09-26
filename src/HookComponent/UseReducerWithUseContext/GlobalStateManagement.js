import React, {createContext, useReducer } from 'react'
import ComponentX from './ComponentX';
import ComponentY from './ComponentY';
import ComponentZ from './ComponentZ';

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
export const CountContext=createContext();
function GlobalStateManagement() {
    const [count,dispatch]=useReducer(reducer,initialstate)

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
    <CountContext.Provider value={{CountIncrement:incfunc,CountDecrement:decfunc,CountReset:resetfunc   }}>    
    <div>Global State Count={count}
    <ComponentX/>
    <ComponentY/>
    <ComponentZ/>
    </div>
    </CountContext.Provider>

  )
}

export default GlobalStateManagement