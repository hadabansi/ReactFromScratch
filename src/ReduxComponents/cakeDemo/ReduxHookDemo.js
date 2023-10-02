import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../index';
function ReduxHookDemo() {
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
     const dispatch = useDispatch();
     const CakeManage=()=>
     {
        dispatch(buyCake())
     }
  return (
   <>
    <h1>
    Number Of Cakes:{numOfCakes}
   </h1>
   <button onClick={CakeManage}>BuyCake</button>
   </>
  )
}
export default ReduxHookDemo