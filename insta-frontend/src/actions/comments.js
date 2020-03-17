

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
      debugger
      return dispatch({type: "CREATED_POST", payload: newPost})
    })
  }
}