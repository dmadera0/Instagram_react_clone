import React, {useState} from 'react'
import {connect } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
// import { createComment } from '../../actions/posts'
function PostComments(props) {
  // console.log(props, props.match.params)
  // console.log("user:", usersId, "post:", postsId)  
  // console.log(props.post)
  let history = useHistory();
  const [content, setContent] = useState("");
  const { usersId, postsId } = props.match.params
    console.log(content)
  function handleOnSubmit(event){
    event.preventDefault()
    if(!content){
      history.push(`users/${usersId}/posts/${postsId}`)
    } else {
      console.log("clicked")
      let post = new FormData();
      post.append("content", content)
      post.append("user_id", usersId)
      post.append("post_id", postsId)
      fetch("/comments", {
        method: 'POST',
        body: post,
        header: {
          "Content-Type": 'multipart/form-data'
        }
      })
    }
  }
  if(!props.user ||  undefined){
    return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found! <Link to="/">Log In</Link></div>)
  } else {
    
    return(<div>
      {<br></br>}
      {props.loading ? "Loading" : props.post.location}{<br></br>}
      {props.loading ? "Loading" : <img src={props.post.image} width="600" alt=""/>}{<br></br>}
      {props.loading ? "Loading" : props.post.content}{<br></br>}
      <form onSubmit={handleOnSubmit}>
        <label>Comment:</label>
        <input type="tex" onChange={ e => setContent(e.target.value)} />{<br></br>}
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