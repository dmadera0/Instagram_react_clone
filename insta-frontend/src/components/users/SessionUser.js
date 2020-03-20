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
        const myposts = this.props.posts.filter( p => p.user.id === this.props.user.id)
        return(
        <div className="SessionUser"> 
          {<br></br>}
          {this.props.loading ? <h3>loading</h3> :profilePic}{<br></br>}
          {this.props.loading ? <h3>loading</h3> : username}{<br></br>}
          {<hr></hr>}
          {this.props.loading ? <h3>loading</h3> : 
          <MyPost posts={myposts} user={this.props.user} user_id={id}/> }
        </div>)
    }
  }
}

const mapStateToProps = state => {
  console.log(state.posts.posts)
  
  return {
    user: state.users.currentUser,
    posts: state.posts.posts,
    loading: state.users.loading
  }
}

export default connect(mapStateToProps, {getUser})(SessionUser)