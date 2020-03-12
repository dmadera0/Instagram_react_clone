import React, { useState } from 'react';
import { connect } from 'react-redux'
import {Link, useHistory} from "react-router-dom";
import { createPost } from '../../actions/Posts'

function PostInput(props) {
  let history = useHistory();  
  const [location, setLocation] = useState("");
  const [ image, setImage] = useState("");
  const [ content, setContent] = useState("");
  // const [user_id, setUser_id] = useState("");


  function handleOnSubmit(event) {
    event.preventDefault();
    let post = new FormData();
    post.append("location", location)
    post.append("image", image)
    post.append( "content", content)
    post.append("user_id", props.location.state.thisUser.id)
    props.createPost(post)
    history.push("/home")
  }

  return(
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleOnSubmit}>
        <label>Location</label>
        <input type="text" onChange={e => setLocation(e.target.value)} name="location"/><br></br>
        <label>Image:</label>
        <input type="file" onChange={e => setImage(e.target.files[0])}     name="image" accept="image/png, image/jpeg"/><br></br>
        <label>Content</label>
        <input type="text" onChange={e => setContent(e.target.value)} name="content"/><br></br>
          <input type="submit"/>
      </form>
    </div>)
}


export default connect(null, { createPost })(PostInput);