import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div><h1>{this.props.name} props from class</h1></div>
    )
  }
}
