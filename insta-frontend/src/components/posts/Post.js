import React, {Component} from 'react'

class Post extends Component {
  render(){
      // console.log(this.props.state)
    
    return(<div>
      {this.props.content}{<br></br>}
      {<img src={this.props.image } width="300" alt=""/>}
      {<hr></hr>}
    </div>)
  }
}

export default Post