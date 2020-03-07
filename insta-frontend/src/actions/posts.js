export const fetchPosts = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_USERS'})
      fetch('/users')
      .then(resp => resp.json())
      .then(response => {
        dispatch({type: "ADD_USERS", users: response})
      })
  }
}