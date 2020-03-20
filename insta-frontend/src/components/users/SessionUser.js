import React, {Component} from 'react'
import { connect } from 'react-redux'
import { myPosts } from '../../actions/posts'
import MyPost from '../posts/MyPosts'
import { Link } from "react-router-dom";
class SessionUser extends Component {

  render(){
      // console.log(this.props.user)
    
    if (!this.props.user  || this.props.user === undefined){
      return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
      } else if (this.props.user) {
        
        const {username, image} = this.props.user
        const profilePic = <img src={image} width="300" alt=""/> 
        document.title = username
        console.log(this.props)
        return(
        <div className="SessionUser"> 
          {<br></br>}
          {this.props.loading ? <h3>loading</h3> :profilePic}{<br></br>}
          {this.props.loading ? <h3>loading</h3> : username}{<br></br>}
          {<hr></hr>}
          {this.props.postsLoading ? <h3>loading</h3> :
          <MyPost posts={this.props.posts} user={this.props.user} /> }
        </div>)
    }
  }
}

const mapStateToProps = state => {
  console.log(state.posts.posts)
  
  return {
    user: state.users.currentUser,
    posts: state.posts.posts,
    myPosts: state.posts.myPosts,
    loading: state.users.loading,
    postsLoading: state.posts.loading
  }
}

export default connect(mapStateToProps)(SessionUser)