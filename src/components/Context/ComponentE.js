import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentE extends Component {
  render() {
    return (
      <>
       <UserConsumer>
           { (username)=>{
                return `Hello ${username}`
           }
           }
        </UserConsumer>
        </>
    )
  }
}

export default ComponentE