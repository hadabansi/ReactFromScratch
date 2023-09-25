import React, { useState } from 'react'

function ObjectPassUseState() {
    const [Name,setName]=useState({firstname:"",lastname:""})
  return (
    <>
   <input type='text' value={Name.firstname} onChange={e=>setName({...Name,firstname:e.target.value})}/>
   <input type='text' value={Name.lastname} onChange={e=>setName({...Name,lastname:e.target.value})}/> 
   <h1>FisrtName:{Name.firstname}</h1>
   <h1>LastName:{Name.lastname}</h1>
   <h3>{JSON.stringify(Name)}</h3>
   </>
  )
}

export default ObjectPassUseState