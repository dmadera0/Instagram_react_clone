import React, { useState } from 'react'
import { useHistory, Link} from "react-router-dom";
import {connect } from 'react-redux'
import { showPost, deletePost, editPost } from '../../actions/posts'

function MyPost(props) {
  const [ like, setLike] = useState('♡')
  let history = useHistory()

  function handleOnComments() {
    props.showPost(props.id)
    history.push(`users/${props.user_id}/posts/${props.id}`)
  }

  function handleOnDelete() {
    props.deletePost(props.id)
    
  }

  function handleOnEdit() {

  }

  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt="" onDoubleClick={ e => setLike('❤️')}/>}{<br></br>}
      <button onClick={ e => setLike('❤️')}>{like} </button> 
      <button onClick={handleOnComments}>💬</button>
      <button onClick={handleOnEdit}>✎</button>
      <button onClick={handleOnDelete}>✐</button>
      {<br></br>}
      {<br></br>}
    </div>)
}


export default connect(null, {showPost, deletePost, editPost})(MyPost)