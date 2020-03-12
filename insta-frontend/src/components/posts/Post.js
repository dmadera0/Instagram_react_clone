import React, {Component} from 'react'

class Post extends Component {
  render(){
    return(<div>
      {this.props.user.username}{<br></br>}
      {this.props.location}{<br></br>}
      {this.props.content}{<br></br>}
      {<img src={this.props.image } width="300" alt=""/>}
      {<hr></hr>}
    </div>)
  }
}

export default Post