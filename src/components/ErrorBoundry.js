import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }
    static getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
  render() {
   
        if(this.state.hasError){
           return <h1>Not a Company Name</h1>

        }
        else{
      return this.props.children
    }

  }
}

export default ErrorBoundry