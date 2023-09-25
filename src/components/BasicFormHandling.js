import React, { Component } from 'react'

export class BasicFormHandling extends Component {
    constructor()
    {
        super()
        this.state={
            username:'',
            comments:'',
            topic:'React'
        }
    }
    changename=event=>{
        this.setState({
            username:event.target.value
        })
    }
    changecomments=event=>{
        this.setState({
            comments:event.target.value
        })
    }
    changetopic=event=>{
        this.setState({
            topic:event.target.value
        })
    }
    formsubmit=event=>{
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      
    }

  render() {
    const {username,comments,topic}=this.state;
    return (
      <>
      <form onSubmit={this.formsubmit}>
    <input value={username} onChange={this.changename}></input><br/>
    <textarea value={comments} onChange={this.changecomments}></textarea><br/>
    <select value={topic} onChange={this.changetopic}>
        <option value="react">React</option>
        <option value="laravel">Laravel</option>
        <option value="php">PHP</option>
    </select><br/>
    <input type="submit"></input>
      </form>
      </>
    )
  }
}

export default BasicFormHandling