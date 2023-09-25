import React, {Component } from 'react'
import ChildComponent from './ChildComponent'
export class ConceptMethodAsProps extends Component {
    constructor()
    {
        super()
        this.greet=this.greet.bind(this)
    }
    greet(name)
    {
        alert(`hello ${name}`)
    }
  render() {
    return (
        <div>
    <ChildComponent greetparent={this.greet}/></div>
    )
  }
}

export default ConceptMethodAsProps