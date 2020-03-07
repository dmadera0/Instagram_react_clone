import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    username: "",
    email: "",  
    phoneNum: null,
    password: "",
    image: null
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.tagret.value
    })
  }

  handleOnImage = (event) => {
    this.setState({
      image: event.target.files[0]
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    // this.props.addUser(this.State)
    this.setState({
      username: "",
      email: "",  
      phoneNum: null,
      password: "",
      image:null
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
            <label>User Name</label>
            <input type="text" name="username" onChange={this.handleOnChange}/>
            <label>Email</label>
            <input type="text" name="email" onChange={this.handleOnChange}/>
            <label>Number</label>
            <input type="number"name="phoneNum" onChange={this.handleOnChange}/>
            <label>Image</label>
            <input type="file" onChange={this.handleOnImage} name="image"/>
            <label>password</label>
            <input type="password" name="password" onChange={this.handleOnChange}/>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default SignUp