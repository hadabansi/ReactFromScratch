import React, { Component } from 'react'
import yourImage from './sslce1.png'; 
import './imgcss.css';


export class ErrorHandling extends Component {
  render() {
    return (
      <div>
        <h2>ErrorHandling Method</h2>
        <img src={yourImage} alt="Hello"></img>
      </div>
    )
  }
}

export default ErrorHandling