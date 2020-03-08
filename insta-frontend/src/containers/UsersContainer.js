import React, {Component} from 'react'
import { connect } from 'react-redux'

// import LandingPage from '../components/root/LandingPage'
// import SignUp from '../components/root/SignUp'
import Users from '../components/users/Users'


class UsersCointainer extends Component {
  render(){
    return(
      <div>
        <h1>Users container</h1>
        {/* <LandingPage findUser={this.props.findUser}/>
        <SignUp createUser={this.props.createUser}/> */}
        <Users />
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



export default connect(mapStateToProps)(UsersCointainer)