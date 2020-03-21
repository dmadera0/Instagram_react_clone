import React, { useState } from 'react'
import Button from 'react-bootstrap/Form'
import Form from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { getUser } from '../actions/users'

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
    
    }
  }

  function signUpForm() {
    history.push("/signup")
  }
  document.title = "Welcome"
  return(<>
          <h1>Welcome to Instagram</h1>{<br></br>}
          
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label>User name: </label>
            <input type="text" name="username" onChange={ e => setUsername(e.target.value)}/><br></br>
          </div> 
          <div className="form-group">
            <label>password:</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/><br></br>
          </div>
            <input type="submit" value="Log In" className="btn btn-primary" />{<br></br>}

        </form>{<br></br>}

        {/* <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form> */}
          <button className="btn btn-primary" onClick={signUpForm}>Sign Up</button>
    </>
  )
}

export default connect(null, { getUser })(LandingPage)