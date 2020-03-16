import React, {Component} from 'react'
import MyPost from './MyPost'
import { Link } from "react-router-dom";
class MyPosts extends Component {
  render(){
    // console.log(this.props.posts.sort( (a,b) => (a.id) > (b.id) ? 1 : -1))

    if(this.props.posts) {
      const Myposts = this.props.posts.map( post => <MyPost key={post.id} id={post.id} user_id={this.props.user_id} location={post.location} content={post.content} image={post.image} user={post.user} /> );
      
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