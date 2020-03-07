import React, { Component } from 'react'
// import SignUp from './SignUp'
class LandingPage extends Component {
  
  handleOnSingUp = (event) =>{
    console.log(event)
  }

  render() {
    
    return(
      <div>
        <form>
          <label>Number</label>
          <input type="number"/>
          <label>password</label>
          <input type="password" />
          <input type="submit" />
        </form>
        <button>sign Up</button>
      </div>
    )
  }
}

export default LandingPage