import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../index'


function ReduxDemo2(store) {
  return (
    <>
    <h1>
    Number Of Icecreams:{store.numOfIceCream}
   </h1>
   <button onClick={store.buyIceCream}>buy IceCream</button>
   </>
    )
}

const mapStateToProps=state=>{
    return {
        numOfIceCream:state.icecream.numOfIceCream
    }
}
const mapDispatchToProps=dispatch=>{
return{
    buyIceCream:()=>dispatch(buyIceCream())
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxDemo2)