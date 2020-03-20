import React, { useState } from 'react'
import { useHistory, Link} from "react-router-dom";
import {connect } from 'react-redux'
import { showPost, deletePost, editPost } from '../../actions/posts'
import { showUser } from '../../actions/users'
function MyPost(props) {
  const [ like, setLike] = useState('♡')
  let history = useHistory()

  function handleOnComments() {
    props.showPost(props.id)
    
  }

  function handleOnDelete() {
    // debugger
    props.deletePost(props.id)
    
  }

  function handleOnEdit() {
    props.showPost(props.id)
    history.push(`/posts/${props.id}/edit`)
  }

  console.log(props)
  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt="" onDoubleClick={ e => setLike('❤️')}/>}{<br></br>}
      <button onClick={ e => setLike('❤️')}>{like} </button> 
      <Link  to={`/${props.user.username}/posts/${props.id}`} onClick={handleOnComments}>💬</Link>
      {props.loading ? "Loading" : <button onClick={handleOnEdit} >✎</button>}
      {props.loading ? "Loading" : <button onClick={handleOnDelete}>✐</button>}{<br></br>} 
      {<br></br>}
      {<br></br>}
    </div>)
}



export default connect(null, {showPost, deletePost, showUser})(MyPost)