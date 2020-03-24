import React from 'react'
import Comment from './Comment'
function Comments(props) {
  const allcomments = props.comments.map( comment => < Comment  content={comment.content} user={comment.user}/>)
  return(
  <div>
    {allcomments}
  </div>)
}

export default Comments 