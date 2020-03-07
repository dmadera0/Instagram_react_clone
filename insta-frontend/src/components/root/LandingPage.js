import React, { Component } from 'react'
import SignUp from './SignUp'
class LandingPage extends Component {
  
  state = {
    number:null,
    password:""
  }

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.taget.value
    })
  }

  handleOnSubmit = (event) =>{
    event.preventDEfault()
    // import action
    this.setState({
      number: null,
      password: ""
    })
  }

  // handleOnSingUp = (event) =>{
  //   console.log(event)
  // }

  render() {
    
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Number</label>
          <input type="number" name="number" onChange={this.handleOnChange}/>
          <label>password</label>
          <input type="password" name="password" onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
        <button>sign Up</button>
        <SignUp />
      </div>
    )
  }
}

export default LandingPage