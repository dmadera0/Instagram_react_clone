import React, { useState } from 'react'
// import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getUser } from '../actions/users'
import { myPosts } from '../actions/posts'
import {useHistory} from "react-router-dom";
function LandingPage(props) {

  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  function handleOnSubmit(event) {
    event.preventDefault()
    if ( !username || !password) {
      history.push("/")
    } else {
    let user = new FormData();
    user.append("username", username)
    user.append("password", password)
    props.getUser(user)
    history.push("/feed");
    // props.myPosts()
    }
  }

  function signUpForm() {
    history.push("/signup")
  }
  document.title = "Welcome"
  return(
      <div>
          <h1>Welcome to Instagram</h1>
          
          <form onSubmit={handleOnSubmit}>
            <label>User name</label>
            <input type="text" name="username" onChange={ e => setUsername(e.target.value)}/><br></br>
            <label>password</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/><br></br>
            <input type="submit" value="Log In" className="btn btn-primary" />
          </form>
          <button onClick={signUpForm}>Sign Up</button>
      </div>
  )
}

export default connect(null, { getUser, myPosts })(LandingPage)