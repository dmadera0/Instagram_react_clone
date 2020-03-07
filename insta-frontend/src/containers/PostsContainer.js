import React, { Component } from 'react'
import { connect } from 'react-redux'
import Posts from '../components/posts/Posts'
import PostInput from '../components/posts/PostInput'

class PostsContainer extends Component {
  render(){
    return(
    <div>
      <h1>Posts Cotainer</h1>
      < Posts /> 
      < PostInput />
    </div>)
  }
}

const mapStateToProps = ({posts}) => ( console.log(posts),{
  posts
})

const mapDispatchToProps = dispatch => ({
  addPosts: posts => dispatch({type: "ADD_POSTS", posts}),
  createPost: post => dispatch({type: "CREATE_POST", post}),
  editPost: id => dispatch({type: "EDIT_POST"}, id),
  deletePOst: id => dispatch({type: "DELETE_POST"}, id)
})


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);