import React, { Component } from 'react'

class LandingPage extends Component {


  
  render() {
    return(
      <div>
        <form>
          <label>Number</label>
          <input type="number"/>
          <label>password</label>
          <input type="text" />
          <input type="submit" />
        </form>
        <button>sign Up</button>
      </div>
    )
  }
}

export default LandingPage