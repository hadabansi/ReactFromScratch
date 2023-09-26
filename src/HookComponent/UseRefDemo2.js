import React, { useEffect, useRef, useState } from 'react'

function UseRefDemo2() {
    const timerRef=useRef();
    const [timer,setTimer]=useState(0);
    useEffect(()=>{
        timerRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return()=>{
            clearInterval(timerRef.current)
        }
    },[])
    const stoptimer=()=>{
        clearInterval(timerRef.current)
    }
  return (
   <>
   Hook Timer-{timer}
    <button onClick={stoptimer}>Stop Timer</button> 
   </>
  )
}

export default UseRefDemo2