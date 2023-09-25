import React, { Component } from 'react'

export class ConceptDestructringinClassComp extends Component {
  render() {
    const {name}=this.props
    return (
      <div><h1>{name}</h1></div>
    )
  }
}

export default ConceptDestructringinClassComp