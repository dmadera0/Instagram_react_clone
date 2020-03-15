import React, {Component} from 'react'
import MyPost from './MyPost'
import { Link } from "react-router-dom";
class MyPosts extends Component {
  render(){
  
    if(this.props.posts) {
      // const Myposts = this.props.posts.map( (post, i) => <ul key={i} id={post.id} user_id={post.user_id}> <img src={post.image} width="400" alt="" /> {<br></br>}<button value="like">♥️️</button>  </ul>)

      const Myposts = this.props.posts.map( (post, i) => <MyPost key={i} id={post.id} user_id={post.user_id} location={post.location} content={post.content} image={post.image} user={post.user} /> )

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