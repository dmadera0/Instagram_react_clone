import React, { Component } from 'react'

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
    event.preventDefault()
    // import action
    this.setState({
      number: null,
      password: ""
    })
  }

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
      </div>
    )
  }
}

export default LandingPage