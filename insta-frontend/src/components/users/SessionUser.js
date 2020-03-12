import React, {Component} from 'react'
import User from './User'
import { connect } from 'react-redux'
import { getUser } from '../../actions/users'
import { Link } from 'react-router-dom'

class SessionUser extends Component {

  render(){
    console.log(this.props.users)
    const thisUser = (this.props.user)
    const image = <img src={thisUser.image} width="200" alt="" />;
    const username = <h2>{thisUser.username}</h2>
    return(
      <div> 
        {username}
        {image}{<br></br>}
        <Link to="/posts/new">New Post</Link>{<br></br>}
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    user: state.users.users,
    loading: state.users.loading
  }
}

export default connect(mapStateToProps, {getUser})(SessionUser)