import React, { Component } from 'react'
import Post from './Post'
class Posts extends Component {

  

  render(){
    const allPosts = this.props.posts.map( (post, i)  => <Post key={i} id={post.id} user_id={post.user_id} location={post.location} content={post.content} image={post.image} user={post.user}/> )
    return(
      <div>
        <ul>
          {this.props.loading ? <h3>...loading...</h3> : allPosts}
        </ul>
      </div>
    )
  }
}

export default Posts