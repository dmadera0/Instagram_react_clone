import React from 'react'

function MyPost(props) {
  return(
    <div>
      {<br></br>}
      {props.content}{<br></br>}
      {<img src={props.image } width="400" alt=""/>}{<br></br>}
      <button>♡ ❤️️ </button><button>💬</button>
      {<br></br>}
      {<br></br>}
    </div>)
}


export default MyPost