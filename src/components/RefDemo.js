import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
      this.crRef=null
      this.setCrRef=element=>{
        this.crRef=element
      }
    }
    componentDidMount(){  
            this.crRef.focus()      
            // this.inputRef.current.focus()
    }
  render() {
    return (
      <div><h1>RefDemo-Focusing a input tag in componentDidMount method using Ref</h1>
      {/* <input type='text' ref={this.inputRef}/> */}
      <input type='text' ref={this.setCrRef}/>
      </div>
    )
  }
}

export default RefDemo