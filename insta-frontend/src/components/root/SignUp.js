import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    username: "",
    email: "",  
    phoneNum: null,
    password: ""
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.tagret.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    // this.props.addUser(this.State)
    this.setState({
      username: "",
      email: "",  
      phoneNum: null,
      password: ""
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
            <label>User Name</label>
            <input type="text" name="" onChange={this.handleOnChange}/>
            <label>Email</label>
            <input type="text" name="" onChange={this.handleOnChange}/>
            <label>Number</label>
            <input type="number"name="" onChange={this.handleOnChange}/>
            <label>password</label>
            <input type="password" name="" onChange={this.handleOnChange}/>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default SignUp