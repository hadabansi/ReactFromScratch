import React, { Component } from 'react'
import yourImage from './sslcun1.png'; 
import './imgcss.css';

class Unmountmethod extends Component {
  render() {
    return (
      <div><h1>Unmount method</h1>
      <img src={yourImage} alt="Hello"></img>
      </div>
    )
  }
}

export default Unmountmethod