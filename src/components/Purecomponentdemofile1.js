import React, { PureComponent } from 'react'

export default class Purecomponentdemofile1 extends PureComponent {
  render() {
    console.log("Pure Comp render");
    return (
      <div><h1>Purecomponent {this.props.name}</h1></div>
    )
  }
}
