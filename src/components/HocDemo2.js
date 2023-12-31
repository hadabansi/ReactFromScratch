import React, { Component } from 'react'
import UpdatedComponent from '../Counter';

export class HocDemo2 extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HocDemo2);