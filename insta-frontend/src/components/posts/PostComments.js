import React from 'react'
import {connect } from 'react-redux'
import { Link } from "react-router-dom";
import { showPost } from '../../actions/posts'
function PostComments(props) {
  // console.log(props, props.match.params)
  console.log(props.post)
  if(!props.user ||  undefined){
    return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found! <Link to="/">Log In</Link></div>)
  } else {
    const { usersId, postsId } = props.match.params
    // console.log("user:", usersId, "post:", postsId)  

    return(<div>
      {<br></br>}
      {props.loading ? "Loading" : props.post.location}{<br></br>}
      {props.loading ? "Loading" : <img src={props.post.image} width="600" alt=""/>}{<br></br>}
      {props.loading ? "Loading" : props.post.content}{<br></br>}
      <form>
        <label>Comment:</label>
        <input type="textarea"/>{<br></br>}
        <input type="submit" value="Comment" />
      </form>{<br></br>}
      
      {props.loading ? "Loading" : "comments"}
      
    </div>
    )
  }
  
}

const mapStateToProps = state => {
  //  console.log(state.users.loading, state.posts.currentPost)
  return {
    user: state.users.currentUser,
    post: state.posts.currentPost,
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps)(PostComments) 