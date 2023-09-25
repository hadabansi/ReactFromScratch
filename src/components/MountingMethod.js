import React, { Component } from 'react'
import yourImage1 from './sslcm1.png'; 
import yourImage2 from './sslcm2.png'; 
import yourImage3 from './sslcm3.png'; 
import yourImage4 from './sslcm4.png'; 
import './imgcss.css';


export default class MountingMethod extends Component {
    
    constructor(props){
        super(props)
        console.log("Lifecycle Constructor");
        this.state={
            name:"vishvas"
        }
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log("Lifecycle getDerivedStateFromProps")
        return null;
    }
    componentDidMount()
{
    console.log("LifeCycle componentDidMount");
}
  render() {
    console.log("Lifecycle Render");
    return (
        <div>
        <h1>Mounting Method</h1>
        <h2>-------------------Constructor---------------------</h2>
      <img src={yourImage1} alt="Hello"></img>
         <h2>-------------------static getDerivedStateFromProps---------------------</h2>
         <img src={yourImage2} alt="Hello"></img>
         <h2>-------------------Render---------------------</h2>
         <img src={yourImage3} alt="Hello"></img>
         <h2>-------------------ComponentDidMount---------------------</h2>
         <img src={yourImage4} alt="Hello"></img>
         <h2>Note::For Sequence show The Console</h2>
         </div>

        
    )
  }
}
