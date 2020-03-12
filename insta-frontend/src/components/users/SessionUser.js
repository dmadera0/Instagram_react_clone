import React, {Component} from 'react'
import User from './User'
import { connect } from 'react-redux'
import { getUser } from '../../actions/Users'
import { Link } from 'react-router-dom'

// import NavBar from './components/NavBar'
class SessionUser extends Component {

  render(){
    console.log(this.props.users)
    const thisUser = (this.props.users)
    const image = <img src={thisUser.image} width="200" alt="" />;
    const username = <p>{thisUser.username}</p>   
    return(
      <div>
        <p>Session user</p>
        <Link to={{
              pathname: "/posts/new",
              state: {thisUser}
                  }}>New Post</Link>{<br></br>}
        {this.props.laoding ? <h3>...loading...</h3> : username, image}      
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