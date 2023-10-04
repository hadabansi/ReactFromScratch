import React from 'react'
import { connect } from 'react-redux'
import { ordered,restocked } from './cakeSlice'

function CakeView(store) {
  return (
    <>
    <h2>Number Of Cakes-{store.numOfCakes}</h2>
    <button onClick={store.buyCake}>Order Cake</button>
    <button onClick={store.addCake}>Restock Cake</button>
    </>
  )
}
const mapStateToProps=state=>{
    return {
        numOfCakes:state.cake.numOfCakes
    }
}
const mapDispatchToProps=dispatch=>{
 return{
    buyCake:()=>dispatch(ordered()),
    addCake:()=>dispatch(restocked(1))
 }   
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeView)