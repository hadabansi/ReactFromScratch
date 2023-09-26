import React, { useState } from 'react'
import CleanupUseEffect from './CleanupUseEffect';

function UnmountInUseEffect() {
    const [display,setDisplay]=useState(true);
  return (
    <>
    <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
     {display&&<CleanupUseEffect/>}
    </>
  )
}

export default UnmountInUseEffect