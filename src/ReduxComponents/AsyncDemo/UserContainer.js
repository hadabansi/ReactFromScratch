import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../index'

function UserContainer({userData,fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[]);

  return userData.loading?(
  <h2>loading</h2>
  ):userData.error?
  (<h2>{userData.error}</h2>):
  (
    <div>{
        userData && userData.users && userData.users.map(user=><p key={user.id}>{user.name}</p>)
    }</div>
  )
}
const mapStateToProps=state=>{
    console.log(state.user.users);
    return{
        userData:state.user
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        fetchUsers:()=>{dispatch(fetchUsers())} 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)