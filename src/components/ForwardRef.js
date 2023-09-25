import React, { Component } from 'react'
import RefDemo2 from './RefDemo2'

export class ForwardRef extends Component {
    constructor(props) {
      super(props)
    
    this.inputRef=React.createRef()
    }
    clickhandler=()=>
    {
            this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <RefDemo2 ref={this.inputRef}/>
        <button onClick={this.clickhandler}>Click me</button>
      </div>
    )
  }
}

export default ForwardRef