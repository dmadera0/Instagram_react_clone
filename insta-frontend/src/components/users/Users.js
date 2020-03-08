import React from 'react'
import User from './User'

class Users extends React.Component {
  
  render(){
    const userList = this.props.users.map( (user, i) => <li key={i}> {user.username} </li>)
   
    return(
      <div>
        Users
        <ul>
          {this.props.laoding ? <h3>...loading...</h3> : userList }      
        </ul>
      </div>
    )
  }
}

export default (Users)