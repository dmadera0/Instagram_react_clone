import React, {Component} from 'react'
import User from './User'
import { connect } from 'react-redux'
import { getUser } from '../../actions/Users'
// import NavBar from './components/NavBar'
class SessionUser extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.users)
    const thisUser = (this.props.users)
    debugger
    // const sessionUser = this.props.users.map( (user, i) => <User key={i} id={user.id} username={user.username} email={user.email} phoneNum={user.phoneNum} image={user.image}/>)
    // const sessionUser = thisUser.map( (user) => <ul id={user.id} email={user.email} phoneNum={user.phoneNum}>{user.username} {user.image}</ul>)
    debugger
    return(
      <div>
        <p>Session user</p>
        {this.props.laoding ? <h3>...loading...</h3> : (thisUser.username ) }      
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    users: state.users.users,
    loading: state.users.loading
  }
}

export default connect(mapStateToProps, {getUser})(SessionUser)