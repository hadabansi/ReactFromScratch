import React, { useEffect, useRef } from 'react'

function UseRefDemo() {
    const InputRef=useRef(null);
    useEffect(()=>{
        InputRef.current.focus()
    },[])
  return (
    <>
    <input type='text' ref={InputRef}/> 
    </>
  )
}

export default UseRefDemo