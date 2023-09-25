import React from 'react'
import yourImage from './sslc1.png'; 
import yourImage2 from './sslc2.png'; 
import yourImage3 from './sslc3.png'; 
import './imgcss.css';

function LifeCycleMthods() {
  return (
    <div><h1>LifeCycleMethods</h1>
        <h2>-------------------Main Four Methods---------------------</h2>
      <img src={yourImage} alt="Hello"></img>
      <h2>-------------------Desctiption of Methods(When They Called?)---------------------</h2>
      <img src={yourImage2} alt="Hello"></img>
      <h2>-------------------Child Methods of Main Methods---------------------</h2>
      <img src={yourImage3} alt="Hello"></img>
    </div>
  )
}

export default LifeCycleMthods