import React, { useState } from 'react'

function DemoUseState() {
    const [count,setCount]=useState(0);
  return (
   <>
   <button onClick={()=>setCount(count+1)}>clicked {count}</button>
   </>
  )
}

export default DemoUseState