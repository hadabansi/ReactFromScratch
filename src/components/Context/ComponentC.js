import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
  render() {
    return (
   <ComponentE/>
    )
  }
}

export default ComponentC