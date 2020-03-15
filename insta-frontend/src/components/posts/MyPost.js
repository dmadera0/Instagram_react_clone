import React, { useState } from 'react'
import { useHistory, Link} from "react-router-dom";
function MyPost(props) {
  const [ like, setLike] = useState('♡')
  let history = useHistory()
  
  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt="" />}{<br></br>}
      <button onClick={ e => setLike('❤️')}>{like} </button> <button onClick={ e => history.push('/comment')}>💬</button>
      {<br></br>}
      {<br></br>}
    </div>)
}


export default MyPost