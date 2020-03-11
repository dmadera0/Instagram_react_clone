import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/Users'
import {Link} from "react-router-dom";
class LandingPage extends Component {
  
  
  state = {
    username: "",
    password:"",
    loading: false

  }


  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = (event) =>{
    event.preventDefault()
    let user = new FormData();
    user.append("username", this.state.username)
    user.append("password", this.state.password)
    // const user = {...this.state}
    this.props.getUser(user)
    this.setState({
      phoneNum: "",
      password: "",
      loading: false
    })
    
  }
  render() {
    
    return(
      <div>
        <h1>Welcome to Instagram</h1>
        
        <form onSubmit={this.handleOnSubmit}>
          <label>User name</label>
          <input type="text" name="username" onChange={this.handleOnChange}/><br></br>
          <label>password</label>
          <input type="password" name="password" onChange={this.handleOnChange}/><br></br>
          <input type="submit" value="Log In" className="btn btn-primary"/>
        </form>
        <Link to="/signup" className="btn btn-primary">Sign up</Link>
      </div>
    )
  }
}
// 



export default connect(null, { getUser })(LandingPage)