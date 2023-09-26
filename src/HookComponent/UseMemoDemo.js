import React, { useMemo, useState } from 'react'

function UseMemoDemo() {
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0);

    const incrementCounter1=()=>{
        setCounter1(counter1+1)
    }
    const incrementCounter2=()=>{
        setCounter2(counter2+1)
    }
    const IsEven=useMemo(()=>{
        let i=0
        while(i<200000000)i++
        return counter1%2 === 0
    },[counter1])
  return (
   <>
   {counter1}<br/>
   <button onClick={incrementCounter1}>Increment Counter_1</button>
   <span>{IsEven?'Even':'Odd'}</span><br/>
   {counter2}<br/>
   <button onClick={incrementCounter2}>Increment Counter_2</button>
   </>
  )
}

export default UseMemoDemo