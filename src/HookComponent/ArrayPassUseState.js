import React, { useState } from 'react'

function ArrayPassUseState() {
    const [item,setItem]=useState([])
    const addItem=()=>
    {
        setItem([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10+1)
        }])
    }
  return (
    <>
    <button onClick={addItem}>Add Number</button>
    <ul>
        {item.map(i=>(
        <li key={i.id}>{i.value}</li>))}
    </ul>
    </>
  )
}

export default ArrayPassUseState