import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../actions/users'
import MyPost from '../posts/MyPosts'
import { Link } from "react-router-dom";
class SessionUser extends Component {

  render(){
      // console.log(this.props.user)
    
    if (!this.props.user  || this.props.user === undefined){
      return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
      } else if (this.props.user) {
        
        const {username, image, posts, id} = this.props.user
        const profilePic = <img src={image} width="300" alt=""/> 
        document.title = username
        return(
        <div className="SessionUser"> 
          {<br></br>}
          {profilePic}{<br></br>}
          {username}{<br></br>}
          {<hr></hr>}
          {this.props.loading ? <h3>loading</h3> : 
          <MyPost posts={posts} user={this.props.user} user_id={id}/> }
        </div>)
    }
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