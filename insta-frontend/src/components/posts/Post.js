import React, { useState} from 'react'
import { useHistory, Link} from "react-router-dom";
function Post(props) {
  const [ like, setLike] = useState('♡')
  let history = useHistory()
  
  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt="" onDoubleClick={ e => setLike('❤️')}/>}{<br></br>}
      <button onClick={ e => setLike('❤️')}>{like} </button> <button onClick={ e => history.push(`users/${props.user_id}/posts/${props.id}/comments`)}>💬</button>
      {<br></br>}
      {<br></br>}
    </div>)

}

export default Post