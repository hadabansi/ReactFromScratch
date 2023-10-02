import axios from 'axios';
import { 
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS,
    FETCH_USER_REQUEST } from "./UserTypes"
export const fetchUsersRequest=()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess=users=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure=errors=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:errors
    }
}

export const fetchUsers=()=>{
    return(dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
            const users=response.data
            dispatch(fetchUsersSuccess(users))
        }).catch(error=>{
            const errormsg=error.message
            dispatch(fetchUsersFailure(errormsg))
        })
    }
}