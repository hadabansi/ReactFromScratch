import React, { Component } from 'react';
import yourImage from './ss1.png'; 
import './imgcss.css';

export class Counterusingstate extends Component {
    constructor(){
        super()
        this.state={
            count:0 }
    }
    increment()
    {
      this.setState((prevState) => ({
        count: prevState.count + 1
    }));
        // console.log(this.state.count)
    }
  render() {
    return (
      <div><h2>Counter</h2>
      <h1>{this.state.count}</h1>
      <button onClick={()=>this.increment()}>Increment</button><br/><br/>
      <h2>-------------------Important Notes---------------------</h2>
      <img src={yourImage} alt="Hello"></img>
      </div>
    )
  }
}

export default Counterusingstate