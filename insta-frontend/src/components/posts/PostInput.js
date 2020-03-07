import React, { Component } from 'react';

class PostInput extends Component {

  state = {
    location: "",
    image: null,
    contetn: "",
    user_id: null
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
    // this.props.addPost
    this.setState({
      location: "",
      image: null,
      contetn: "",
      user_id: null
    })
  }
  render(){
    return(
    <div>
      <h>Create Post</h>
      <form onSubmit={this.handleOnSubmit}>
        <label>Location</label>
        <input type="text" onChange={this.handleOnChange} name="location"/>
        <label>Image:</label>
        <input type="file" onChange={this.handleOnImage} name="image" name="image"/>
        <label>Content</label>
        <input type="text" onChange={this.handleOnChange} name="content"/>
        {/* <input 
            type="hidden" 
            value={user_id}
            name="user_id"
            ref={x => {setValue(user_id)}}
          /> */}
          <input type="submit"/>
      </form>
    </div>)
  }
}

export default PostInput;