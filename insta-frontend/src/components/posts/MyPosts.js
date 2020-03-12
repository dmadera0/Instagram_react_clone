import React, {Component} from 'react'

class MyPosts extends Component {
  render(){
  const Myposts = this.props.posts.map( (post, i) => <li key={i} id={post.id} user_id={post.user_id}><img src={post.image} width="400" alt=""/></li>)
  
    return(
      <div>
      {Myposts}
      <p>My Posts</p>
      
    </div>)
  }
}

export default MyPosts