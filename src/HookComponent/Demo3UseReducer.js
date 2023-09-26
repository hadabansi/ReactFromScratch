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
function Demo3UseReducer() {
    const [count,dispatch]=useReducer(reducer,initialstate)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialstate)

    const incfunc=()=>
    {
        dispatch('Increment')
    }
    const decfunc=()=>
    {
        dispatch('Decrement')
    }
    const resetfunc=()=>
    {
        dispatch('Reset')
    }
    const Twoincfunc=()=>
    {
        dispatchTwo('Increment')
    }
    const Twodecfunc=()=>
    {
        dispatchTwo('Decrement')
    }
    const Tworesetfunc=()=>
    {
        dispatchTwo('Reset')
    }

  return (
    <div>
        CountOne-{count}
        <button onClick={incfunc}>Increment</button>
        <button onClick={decfunc}>Decrement</button>
        <button onClick={resetfunc}>Reset</button>
        <br/>
        CountTwo-{countTwo}
        <button onClick={Twoincfunc}>Increment</button>
        <button onClick={Twodecfunc}>Decrement</button>
        <button onClick={Tworesetfunc}>Reset</button>
    </div>
  )
}

export default Demo3UseReducer