import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import PostInput from '../components/posts/PostInput'
import { getPosts } from '../actions/Posts'
class PostsContainer extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    return(
    <div>
      <h1>Posts Cotainer</h1>
      < PostInput createPost={this.props.createPost}/> 
      < Posts post={this.props.posts}  /> 
      
    </div>)
  }
}

const mapStateToProps = state => {
  console.log(state.posts)
  return{
    posts: state.posts.posts,
    laoding: state.posts.loading}
  
}

export default connect(mapStateToProps, { getPosts })(PostsContainer);