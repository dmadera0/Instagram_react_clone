import React, { useState } from 'react'
import { useHistory, Link} from "react-router-dom";
import {connect } from 'react-redux'
import { showPost, deletePost, editPost } from '../../actions/posts'

function MyPost(props) {
  const [ like, setLike] = useState('♡')
  let history = useHistory()

  function handleOnComments() {
    props.showPost(props.id)
    
  }

  console.log(props)
  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt="" onDoubleClick={ e => setLike('❤️')}/>}{<br></br>}
      <Link onClick={ e => setLike('❤️')}>{like} </Link> 
      <Link  to={`/${props.user.username}/posts/${props.id}/me`} onClick={handleOnComments}>💬</Link>
      {<br></br>}
      {<br></br>}
    </div>)
}


export default connect(null, {showPost, deletePost, editPost})(MyPost)