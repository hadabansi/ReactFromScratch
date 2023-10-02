import React, { useState } from 'react'
import { buyCake } from '../index'
import {connect} from 'react-redux'

function PayloadDemo(store) {
    const [number,setNumber]=useState(1);
    const manageNumber=e=>{
        setNumber(e.target.value)
    }
    const manageCake=()=>
    {
        store.buyCake(number)
    }
  return (
    <>
   <h1>number of cakes:{store.numOfCakes}</h1>
   <input type='number' value={number} onChange={manageNumber}/>
   <button onClick={manageCake}>Buy {number} cake</button>
   </>
  )
}
const mapStateToProps=state=>{
    return{
        numOfCakes:state.cake.numOfCakes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PayloadDemo);