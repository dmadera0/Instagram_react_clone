import React, { Component } from 'react'

class User extends Component {
  render(){
    return(
      <div>
        Username: {this.props.username} {<br/>}
        Profile Pic: {<img src={this.props.image} />}
      </div>
    )
  }
}

export default User