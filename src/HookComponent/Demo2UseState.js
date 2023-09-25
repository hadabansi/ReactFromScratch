import React, { useState } from 'react'
function Demo2UseState() {
    const initialcount=0;
    const [count,setCount]=useState(0);
    const incrementFive=()=>
    {
        for(let i=0;i<5;i++)
        {
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(initialcount)}>Reset</button>
    <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment By 1</button>
    <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement By 1</button>
    <button onClick={incrementFive}>Increment By 5</button></>
  )
}

export default Demo2UseState