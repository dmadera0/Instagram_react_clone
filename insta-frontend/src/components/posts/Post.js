import React, {Component} from 'react'

class Post extends Component {
  render(){
      // console.log(this.props.state)
      // ♥
    return(<div>
      {<br></br>}
      {this.props.content}{<br></br>}
      {<img src={this.props.image } width="400" alt=""/>}{<br></br>}
      <button>♡ ❤️️ </button><button>💬</button>
      {<br></br>}
      {<br></br>}
    </div>)
  }
}

export default Post