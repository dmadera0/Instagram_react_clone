import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions/users'
import { Link } from 'react-router-dom'
import MyPost from '../posts/MyPosts'

class SessionUser extends Component {

  render(){
    console.log(this.props.user)

    const {username, image, posts} = this.props.user
    const profilePic = <img src={image} width="300" alt=""/> 
    return(
      <div className="SessionUser"> 
        {<br></br>}
        {profilePic}{<br></br>}
        {username}{<br></br>}
        {this.props.loading ? <h3>loading</h3> : 
        <MyPost posts={posts}/> }
        {/* <MyPost /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.currentUser)
  
  return {
    user: state.users.currentUser,
    loading: state.users.loading
  }
}

export default connect(mapStateToProps, {getUser})(SessionUser)