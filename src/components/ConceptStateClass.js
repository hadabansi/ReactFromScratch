import React, { Component } from 'react'

export class ConceptStateClass extends Component {
    constructor()
    {
        super()
        this.state={
            message:'Welcome To Logistic'
        }
    }
    changeMessage()
    {
        this.setState({
            message:'Thank you for subscribing'
        })
    }
  render() {
    return (
      <div>
        <h1>Basic State Example</h1>
        <h2>{this.state.message}</h2>
        <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
      
    )
  }
}

export default ConceptStateClass