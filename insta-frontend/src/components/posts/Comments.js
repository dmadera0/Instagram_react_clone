import React from 'react'
import { useHistory, Link} from "react-router-dom";

function Comments(props) {
const AllComments = props.comments.map ( comment => <ul key={comment.id} user_id={comment.user_id}>{comment.content}</ul>)

  return(
    <div>
      {<br></br>}
      {<hr></hr>}
      Previous Comments:{<br></br>}
      {AllComments}
    </div>
  )
}


export default Comments;