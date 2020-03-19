export const getPosts = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_POSTS'})
      fetch('/posts')
      .then(resp => resp.json())
      .then(Posts => {
        dispatch({type: "POSTS_LOADED", payload: Posts})
      })
  }
}

export const showPost = (id) =>{
  return ( dispatch ) => {
    dispatch({type: 'SHOW_POST'}, id)
      fetch(`/posts/${id}`)
      .then(resp => resp.json())
      .then(Post => {
        dispatch({type: "SHOWING_POST", payload: Post})
      })
      // debugger
  }
}

export const createPost = ( post) => {
  return ( dispatch ) => {
    dispatch({type: "CREATE_POST"}, post)
    fetch("/posts", {
      method: 'POST',
      body: post,
      header: {
        "Content-Type": 'multipart/form-data'
      }
    })
    .then( resp => resp.json())
    .then(newPost => {
      // debugger
      return dispatch({type: "CREATED_POST", payload: newPost})
    })
  }
}

export const editPost = (id) => {
  return (dispatch) => {
    dispatch({type: "EDIT_POST"}, id)
    fetch(`posts/${id}`, {
      method: 'PATCH',
      body: id,
      header:{
        "Content-Type": 'multipart/form-data'
      }
    })
    .then( resp => resp.json())
    .then( Post => {
      return dispatch({type: "EDITED_POST", payload: Post})
    }
  )}
}

export const deletePost = (id) => {
  return (dispatch) => {
    dispatch({type: "DELETE_POST"}, id)
    fetch(`posts/${id}`, {
      method: 'DELETE',
      body: id,
      header:{
        "Content-Type": 'multipart/form-data'
      }
    })
    .then( dispatch({type: "DELETED_POST"}))
    
  }
}