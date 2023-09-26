import React, {useState,useEffect } from 'react'

function ConditionalRunUseEffect() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    useEffect(()=>{
        console.log("updating title")
        document.title=`you clicked ${count} times`
    },[count])
  return (
     <>
     <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>setCount(prevCount=>prevCount+1)}>Click {count} times</button>
    </>
  )
}

export default ConditionalRunUseEffect