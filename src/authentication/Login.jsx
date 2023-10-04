import React, {useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
function Login() {
  
  const [values,setValues]=useState({
    email:'',
    password:''
  })
  const handlemail=(e)=>{
    setValues({...values,email:e.target.value})
  }
  const handlepassword=(e)=>{
    setValues({...values,password:e.target.value})
  }
  const navigate=useNavigate();
  axios.defaults.withCredentials=true;
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    axios.post('http://localhost:8081/login',values)
    .then(res=>{
      console.log(res.data); 
      if(res.data.status==="success"){
        navigate('/')
        // console.log(res.data.token)
        // localStorage.setItem('authToken',res.data.token);
      }else{
        alert(res.data.message)
      }}
    )
    .catch(error=>console.log(error));
  }
  return (
  <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card" style={{width:"1000px"}}>
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={handlesubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    onChange={handlemail}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={handlepassword}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login