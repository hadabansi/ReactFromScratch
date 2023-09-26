import React, { useReducer } from 'react'

const initialstate={
    firstcounter : 0,
    secondcounter : 0
}
const reducer=(state,action)=>{
switch (action.type) {
    case 'Increment':
        return { ...state,firstcounter:state.firstcounter+action.value}
    case 'Decrement':
        return {...state,firstcounter:state.firstcounter-action.value}
    case 'Increment2':
        return {...state,secondcounter:state.secondcounter+action.value}
    case 'Decrement2':
        return {...state,secondcounter:state.secondcounter-action.value}
    case 'Reset':
        return initialstate;
    default:
        return state;
}
}
function Demo2UseReducer() {
    const[count,dispatch]=useReducer(reducer,initialstate)
    const incfunc=()=>{
    dispatch({
        type:'Increment',value:1
    })
    }
    const inc5func=()=>{
    dispatch({
        type:'Increment',value:5
    })
    }
    const decfunc=()=>{
    dispatch({
        type:'Decrement',value:1
    })
    }
    const dec5func=()=>{
    dispatch({
        type:'Decrement',value:5
    })
    }
    //counter-2
    const secondincfunc=()=>{
    dispatch({
        type:'Increment2',value:1
    })
    }
    const secondinc5func=()=>{
    dispatch({
        type:'Increment2',value:5
    })
    }
    const seconddecfunc=()=>{
    dispatch({
        type:'Decrement2',value:1
    })
    }
    const seconddec5func=()=>{
    dispatch({
        type:'Decrement2',value:5
    })
    }
    const resetfunc=()=>{
    dispatch({
        type:'Reset'
    })
    }
  return (
    <div>
        Counter1 - {count.firstcounter}
        <button onClick={incfunc}>Increment</button>
        <button onClick={decfunc}>Decrement</button>
        <button onClick={inc5func}>Increment By 5</button>
        <button onClick={dec5func}>Decrement By 5</button><br/>
        Counter2 - {count.secondcounter}
        <button onClick={secondincfunc}>Increment</button>
        <button onClick={seconddecfunc}>Decrement</button>
        <button onClick={secondinc5func}>Increment By 5</button>
        <button onClick={seconddec5func}>Decrement By 5</button><br/>
        <button onClick={resetfunc}>Reset</button>
    </div>
  )
}

export default Demo2UseReducer