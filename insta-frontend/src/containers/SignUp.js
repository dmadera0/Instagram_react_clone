import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/Users'
import {Link} from "react-router-dom";
class SignUp extends Component {
  state = {
    username: "",
    email: "",  
    phoneNum: null,
    password: "",
    image: '',
    loading: false
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnImage = (event) => {
    this.setState({
      image: event.target.files[0]
    })
  }
  handleOnSubmit = (event) => {
    event.preventDefault()
    let user = new FormData();
    user.append("username", this.state.username)
    user.append("email", this.state.email)
    user.append("phoneNum", this.state.phoneNum)
    user.append("password", this.state.password)
    user.append("image", this.state.image)
    this.props.createUser(user)
    // console.log(user, this.state)
    // debugger
    this.setState({
      username: "",
      email: "",  
      phoneNum: "",
      password: "",
      image: '',
      loading: false
    })
  }

  render(){
    return(
      <div>
        <h1>Welcome to Instagram</h1>
        <form onSubmit={this.handleOnSubmit}>
            <label>Username: </label>
            <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username}/><br></br>
            <label>Email: </label>
            <input type="text" name="email" onChange={this.handleOnChange} value={this.state.email}/><br></br>
            <label>Number: </label>
            <input type="number"name="phoneNum" onChange={this.handleOnChange} /><br></br>
            <label>Image: </label>
            <input type="file" onChange={this.handleOnImage} name="image" accept="image/png, image/jpeg"/><br></br>
            <label>password: </label>
            <input type="password" name="password" onChange={this.handleOnChange} value={this.state.password}/><br></br>
            <input type="submit" value="Sign Up"/>
          </form>
          <Link to="/" className="btn btn-primary"> Back to Log In</Link>
      </div>
    )
  }
}


export default connect(null, { createUser })(SignUp)