import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Posts } from '../components/Posts'
import { PostInput } from '../components/PostInput'

class PostsContainer extends Component {
  render(){
    return(
    <div>
      < Posts />
      < PostInput />
    </div>)
  }
}



export default connect()(PostsContainer)