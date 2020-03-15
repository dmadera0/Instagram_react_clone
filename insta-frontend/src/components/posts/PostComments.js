import React from 'react'
import {connect } from 'react-redux'
import { Link } from "react-router-dom";
import { showPost } from '../../actions/posts'
function PostComments(props) {
  // console.log(props, props.match.params)

  if(!props.user ||  undefined){
    return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found! <Link to="/">Log In</Link></div>)
  } else {
    const { usersId, postsId } = props.match.params
    console.log("user:", usersId, "post:", postsId)  
    return(<div>
      
      {props.loading ? "Loading" : "got the post"}
    </div>
    )
  }
  
}

const mapStateToProps = state => {
   console.log(state.users.loading, state.posts.currentPost)
  return {
    user: state.users.currentUser,
    post: state.posts.currentPost,
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps)(PostComments) 