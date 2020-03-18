import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import Comments from './Comments'
class PostShow extends Component {
  constructor(props){
    super(props)
  }

  state = {
    content: "",
    user_id: "",
    post_id: ""
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
     
      let comment = new FormData();
      comment.append("content", this.state.content)
      comment.append("user_id", this.state.user_id)
      comment.append("post_id", this.state.post_id)
    console.log(comment)
    fetch("/comments", {
        method: 'POST',
        body: comment,
        header: {
          "Content-Type": 'multipart/form-data'
        }
      })    
    }

  handleOnChange = (event) => {
    this.setState({
      content: event.target.value,
      user_id: this.props.user.id,
      post_id: this.props.post.id
    }, console.log(this.state.content)) 
    
  }

  render(){
    if(!this.props.user ||  undefined){
      return(<div>{<br></br>}{<br></br>} {<br></br>} {<br></br>}User not found! <Link to="/">Log In</Link></div>)
    } else {
      document.title = "Show post"
      return(<div>
        {<br></br>}
        {this.props.loading ? "Loading" : this.props.post.location}{<br></br>}
        {this.props.loading ? "Loading" : <img src={this.props.post.image} width="600" alt=""/>}{<br></br>}
        {this.props.loading ? "Loading" : this.props.post.content}{<br></br>}
        <form onSubmit={this.handleOnSubmit }>
          <label>Comment:</label>
          <input type="tex" onChange={this.handleOnChange} />{<br></br>}
          <button type="submit" value="Comment"  >Comment</button>
        </form>{<br></br>}
        
        {this.props.loading ? "Loading" : < Comments comments={this.props.post.comments}/>}
        
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
   console.log(state.users.loading, state.posts.currentPost)
  return {
    user: state.users.currentUser,
    post: state.posts.currentPost,
    // comment: state.posts.currentPost.comments,
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps)(PostShow) 