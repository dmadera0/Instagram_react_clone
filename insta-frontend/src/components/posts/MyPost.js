import React, { useState, useHistory} from 'react'

function MyPost(props) {
  const [ like, setLike] = useState('♡')

  
  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt=""/>}{<br></br>}
      <button onClick={ e => setLike('❤️')}>{like} </button><button>💬</button>
      {<br></br>}
      {<br></br>}
    </div>)
}


export default MyPost