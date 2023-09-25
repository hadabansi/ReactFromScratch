import React, { Component } from "react";
import yourImage from "./ss2.png";
import "./imgcss.css";

export class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    //Method-1
    //     if(this.state.isLoggedIn)
    //     {
    //     return (
    //       <div>
    //         <h1>Hello From Logistic</h1>
    //       </div>
    //     )
    // }
    // else
    // {
    //     return (
    //         <div>
    //           <h1>Hello From Guest</h1>
    //         </div>
    //       )
    // }

    //Method-2
    // let message
    // if(this.state.isLoggedIn){
    // message=<div>Welcome From Logistic</div>
    //   }
    //   else{
    //     message=<div>Welcome From Guest</div>
    //   }
    //   return <h1>{message}</h1>

    //Method-3
    // return this.state.isLoggedIn ? <h1>Hello From Logistic</h1> : <h1>Hello From Guest</h1>

    //Method-4
    // return this.state.isLoggedIn && <h1>Hello From Logistic</h1>

    return (
      <>
        <h1>Conditional Rendering 4 Methods</h1>
        <h4>To show the MEthods Go and Check Component Comments</h4>
        <img src={yourImage} alt="Hello"></img>
      </>
    );
  }
}

export default ConditionalRendering;
