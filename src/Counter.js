import React, { Component } from "react";

const UpdatedComponent= OriginalComponent=>{
    class Newcomponent extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
            count:0
          }
        }
        incrementCount()
        {
            this.setState((prevState)=>{
                return {count:prevState.count+1}
            })
        }
        render(){
            console.log(this.props.name)
        return(
            <OriginalComponent count={this.state.count} incrementCount={this.incrementCount.bind(this)} {...this.props}/>
        )}
    }
    return Newcomponent;
}
export default UpdatedComponent;