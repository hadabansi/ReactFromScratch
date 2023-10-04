import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
    // localStorage.removeItem('authToken');
    axios.get('http://localhost:8081/logout',{ withCredentials: true }).then(res=>{
        if(res.data.status==="success"){
            window.location.reload(true);
        }else{
            alert("error");
        }
    }).catch(err=>console.log(err))
    return <Navigate to="/login" replace />;
};

export default Logout;
