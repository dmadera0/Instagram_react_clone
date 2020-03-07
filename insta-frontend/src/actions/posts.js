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