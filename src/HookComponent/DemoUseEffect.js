import React, { useEffect, useState } from 'react'

function DemoUseEffect() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    }
    )
  return (
    <>
    <button onClick={()=>setCount(prevCount=>prevCount+1)}>Click {count} times</button>
    </>
  )
}

export default DemoUseEffect