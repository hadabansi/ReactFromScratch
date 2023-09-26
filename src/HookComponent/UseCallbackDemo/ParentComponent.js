import React, { useCallback, useState } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count';

function ParentComponent() {
    const [age,setAge]=useState(25);
    const [salary,setSalary]=useState(5000);
    const IncrementAge=useCallback(()=>
    {
        setAge(age+1)
    },[age])
   
    const IncrementSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
   <>
   <Title/>
   <Count count={age} text="Age"/>
   <Button handleclick={IncrementAge}>Increment Age</Button>
   <Count count={salary} text="Salary"/>
   <Button handleclick={IncrementSalary}>Increment Salary</Button>
   </>
  )
}

export default ParentComponent