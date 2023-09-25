import React, { Component } from 'react'
import Updatedcomponent from '../Counter'

export class HocDemo1 extends Component {
  render() {
   const {count,incrementCount} = this.props
    return (
        <div><br/>
      <button onClick={incrementCount}>{this.props.name} clicked {count} times</button></div>
    )
  }
}

export default Updatedcomponent(HocDemo1);