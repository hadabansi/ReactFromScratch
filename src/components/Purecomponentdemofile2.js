import React, { Component } from 'react'

class Purecomponentdemofile2 extends Component {
  render() {
    console.log("Regular Comp render");
    return (
      <div><h1>Regular Class Component {this.props.name}</h1></div>
     
    )
  }
}

export default Purecomponentdemofile2