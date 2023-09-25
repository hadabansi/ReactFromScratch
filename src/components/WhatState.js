import React from 'react'
import yourImage from './ss.png'; 
import './imgcss.css';

function WhatState() {
  return (
    <div><h1>Props vs State</h1>
    <img src={yourImage } alt="Hello"></img>
   </div>
  )
}

export default WhatState