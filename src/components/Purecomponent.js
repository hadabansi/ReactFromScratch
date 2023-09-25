import React, { Component } from 'react'
import Purecomponentdemofile1 from './Purecomponentdemofile1'
import Purecomponentdemofile2 from './Purecomponentdemofile2'
import yourImage from './purecomponent.png'; 
import yourImage2 from './purecomponent2.png'; 
import yourImage3 from './differencepurereg.png'; 

import './imgcss.css';
import MemoComponent from './MemoComponent';


export class Purecomponent extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"bansi"
        }
      }
      componentDidMount(){
setInterval(()=>{
    this.setState({
        name:"bansi"
    })
},2000)
      }
  render() {
    console.log("Parent Component");
    
    return (
      <div><h1>Purecomponent</h1>
         <h2>What Is PureComponent?</h2>
        <img src={yourImage} alt="Hello"></img>
        <h2>Shallow Comparison</h2>
        <img src={yourImage2} alt="Hello"></img>
        <h2>Difference between Regular Component and Pure Component</h2>
        <img src={yourImage3} alt="Hello"></img>
        <Purecomponentdemofile1 name={this.state.name}/>
        <Purecomponentdemofile2 name={this.state.name}/>
        <h1>Concept of Pure component in Function component known as Memo For This Functionalitu Check MemoComponent.js File</h1>
        <h3>To Output is From Memo Function Component</h3>
        <MemoComponent name={this.state.name}/>
        <h1>To Show the Output Check Console</h1>
      </div>
    )
  }
}

export default Purecomponent