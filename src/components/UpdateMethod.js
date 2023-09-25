import React, { Component } from 'react'
import yourImage1 from './sslcu1.png'; 
import yourImage2 from './sslcu2.png'; 
import yourImage2m from './sslcm2.png'; 
import yourImage3 from './sslcu3.png'; 
import yourImage4 from './sslcu4.png'; 
import './imgcss.css';


export default class UpdateMethod extends Component {
    
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
    shouldComponentUpdate()
    {
        console.log("LifeCycle  shouldComponentUpdate");
        return true;
    }
    componentDidUpdate()
    {
        console.log("LifeCycle componentDidUpdate");
    }
    componentDidMount()
{
    console.log("LifeCycle componentDidMount");
}
changeState()
{
    this.setState({
        name:"hello"
    })
}
  render() {
    console.log("Lifecycle Render");
    return (
        <div>
        <h1>Update Method</h1>
        <h2>-------------------static getDerivedStateFromProps---------------------</h2>
      <img src={yourImage2m} alt="Hello"></img>
         <h2>-------------------shouldcomponentUpdate---------------------</h2>
         <img src={yourImage1} alt="Hello"></img>
         <h2>-------------------Render---------------------</h2>
         <img src={yourImage2} alt="Hello"></img>
         <h2>-------------------getSnapshotBeforeUpdate---------------------</h2>
         <img src={yourImage3} alt="Hello"></img>
         <h2>-------------------ComponentDidUpdate---------------------</h2>
         <img src={yourImage4} alt="Hello"></img>
         <h2>Note::For Sequence show The Console</h2>
         <button onClick={()=>this.changeState()}>Click me</button>
         </div>

        
    )
  }
}
