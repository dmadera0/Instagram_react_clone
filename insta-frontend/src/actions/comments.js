export const getComments = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_COMMENTS'})
      fetch('/comments')
      .then(resp => resp.json())
      .then(Comments => {
        // debugger;
        dispatch({type: "COMMENTS_LOADED", payload: Comments})
      })
  }
}