import React, {Component} from 'react'
import { Link } from "react-router-dom";
class MyPosts extends Component {
  render(){
  
    if(this.props.posts) {
      const Myposts = this.props.posts.map( (post, i) => <ul key={i} id={post.id} user_id={post.user_id}><img src={post.image} width="400" alt=""/></ul>)
      return(
      <div>
        {Myposts}
      </div>)
    }
    else if(!this.props.posts) {
      return(<div>Error, User not found!, <Link to="/">Log In</Link></div>)
    }
  }
}

export default MyPosts