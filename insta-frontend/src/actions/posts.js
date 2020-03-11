export const fetchPosts = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_POSTS'})
      fetch('/posts')
      .then(resp => resp.json())
      .then(response => {
        dispatch({type: "ADD_POSTS", posts: response})
      })
  }
}

export const showPost = (id) =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_POSTs'}, id)
      fetch(`/posts/${id}`)
      .then(resp => resp.json())
      .then(response => {
        dispatch({type: "SHOW_POST", posts: response})
      })
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
    .then( resp => resp.json())
    .then( Post => {
      return dispatch({type: "DELETE_POST", payload: Post})
    }
  )}
}