import React, { Component } from 'react';

class PostInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      location: "",
      image: null,
      contetn: "",
      user_id: null
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnImage = (event) => {
    this.setState({
      image: event.target.files[0]
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const post = this.state
    this.props.createPost(post)
    this.setState({
      location: "",
      image: null,
      contetn: "",
      user_id: null

    })
  }
  render(){
    console.log(this.props)
    debugger;
    return(
    <div>
      <h>Create Post</h>
      <form onSubmit={this.handleOnSubmit}>
        <label>Location</label>
        <input type="text" onChange={this.handleOnChange} name="location"/><br></br>
        <label>Image:</label>
        <input type="file" onChange={this.handleOnImage} name="image"/><br></br>
        <label>Content</label>
        <input type="text" onChange={this.handleOnChange} name="content"/><br></br>
        <input 
            type="hidden" 
            value={user_id}
            name="user_id"
            ref={x => {setValue(this.props.location.state.thisUser.id)}}
          />
          <input type="submit"/>
      </form>
    </div>)
  }
}

export default PostInput;