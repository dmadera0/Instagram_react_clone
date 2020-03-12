import React, {Component} from 'react'

class MyPosts extends Component {
  render(){
  const Myposts = this.props.posts.map( (post, i) => <ul key={i} id={post.id} user_id={post.user_id}><img src={post.image} width="400" alt=""/></ul>)
  
    return(
      <div>
      {Myposts}
    </div>)
  }
}

export default MyPosts