import React from 'react'
import { connect } from 'react-redux'
import { ordered, restocked } from './IceCreamSlice'

function IceCreamView(store) {
  return (
    <>
    <h2>Number Of IceCreams:{store.icecream}</h2>
    <button onClick={store.buyicecreams}>Order IceCreams</button>
    <button onClick={store.addicecreams}>Restock Icecreams</button>
    </>
  )
}
const mapStateToProps=state=>{
    return {
        icecream:state.icecream.numOfIcecreams
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyicecreams:()=>{dispatch(ordered())},
        addicecreams:()=>{dispatch(restocked(1))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamView)