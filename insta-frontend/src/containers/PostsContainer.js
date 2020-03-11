import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import { getPosts } from '../actions/Posts'
class PostsContainer extends Component {

  componentDidMount(){
    this.props.getPosts()
  }

  render(){
    return(
    <div>
      <h1>Posts Cotainer</h1>
      < Posts posts={this.props.posts}  /> 
      
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