import React from 'react'
import {connect} from 'react-redux';
import { buyCake } from '../index';
function ReduxDemo(store) {
  return (
   <>
    <h1>
    Number Of Cakes:{store.numOfCakes}
   </h1>
   <button onClick={store.buyCake}>BuyCake</button>
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
    buyCake:()=>dispatch(buyCake())
 }   
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxDemo)