import React from 'react'
import { connect } from 'react-redux'
import { getUsers }  from '../../actions/Users'; 
import User from './User'

class Users extends React.Component {

  componentDidMount(){
    this.props.getUsers()
  }
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

const mapStateToProps = state => {
  console.log(state.users.loading, state.users.users)
  return {
    users: state.users.users,
    loading: state.users.loading
  }
}
export default connect(mapStateToProps, {getUsers})(Users)