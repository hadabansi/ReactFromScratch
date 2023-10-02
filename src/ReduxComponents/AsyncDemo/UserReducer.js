import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes";

const initialstate={
    loading:false,
    users:[],
    errors:''
}

export const userReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                errors:''
            }
        case FETCH_USER_FAILURE:
            return{
                ...state,
                loading:false,
                users:[],
                errors:action.payload
            }
        default:
            return state;
    }
}