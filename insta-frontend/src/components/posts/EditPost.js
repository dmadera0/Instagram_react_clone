import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory, Link} from "react-router-dom";
import { editPost } from '../../actions/posts'

function EditPost(props) {
  // let { location, Image, Content } = props.post 
  let history = useHistory();  
  const [LOCATION, setLocation] = useState("");
  const [ IMAGE, setImage] = useState("");
  const [ CONTENT, setContent] = useState("");
  console.log(props.post)
  function handleOnSubmit(event) {
    event.preventDefault();
    // let post = new FormData();
    // post.append("location", location)
    // post.append("image", image)
    // post.append( "content", content)
    // post.append("user_id", props.user.id)
    // props.editPost(post)
    // history.push("/home")
  }


  if(!props.user){
    return (<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found!, <Link to="/">Log In</Link></div>)
  }
  else {
    document.title = "Edit Post"
    console.log(props)
  return(
    <div>
      <h1>Edit Post</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Location</label>
        <input type="text" onChange={e => setLocation(e.target.value)} name="location"/><br></br>
        <label>Image:</label>
        {props.loading ? "Loading" : <img src={props.post.image} width="400" alt=""/>}{<br></br>}
        <label>Content</label>
        <input type="text" onChange={e => setContent(e.target.value)} name="content"/><br></br>
          <input type="submit"/>
      </form>
    </div>)
  }
}
  

const mapStateToProps = state => {
  console.log(state.users.loading, state.posts.currentPost)
 return {
   user: state.users.currentUser,
   post: state.posts.currentPost,
   // comment: state.posts.currentPost.comments,
   loading: state.posts.loading
 }
}

export default connect(mapStateToProps, { editPost })(EditPost);