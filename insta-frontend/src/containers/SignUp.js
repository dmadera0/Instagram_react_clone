import React, {  useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/users'
import {Link, useHistory} from "react-router-dom";
function SignUp(props) {
  
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [image, setImage] = useState("");

  function handleOnSubmit(event) {
    event.preventDefault()
    let user = new FormData();
    user.append("username", username)
    user.append("email", email)
    user.append("phoneNum", phoneNum)
    user.append("password", password)
    user.append("image", image)
    props.createUser(user)
    // console.log(user)
    // debugger
    history.push("/signup/successful");
  }

  function logInForm() {
    history.push("/")
  }

  return(
      <div>
        <h1>Welcome to Instagram</h1>
        <form onSubmit={handleOnSubmit}>
            <label>Username: </label>
            <input type="text" name="username" onChange={e => setUsername(e.target.value)}/><br></br>
            <label>Email: </label>
            <input type="text" name="email" onChange={e => setEmail(e.target.value)} /><br></br>
            <label>Number: </label>
            <input type="number"name="phoneNum" onChange={e => setPhoneNum(e.target.value)} /><br></br>
            <label>Image: </label>
            <input type="file" onChange={e => setImage(e.target.files[0])} name="image" accept="image/png, image/jpeg"/><br></br>
            <label>password: </label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} /><br></br>
            <input type="submit" value="Sign Up"/>
          </form>
          <button onClick={logInForm}>Or Log In</button>
      </div>
    )
}



export default connect(null, { createUser })(SignUp)