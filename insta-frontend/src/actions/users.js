export const getUsers = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_USERS'})
      fetch('/users')
      .then(resp => resp.json())
      .then(users =>  dispatch({type: "USERS_LOADED", payload: users}) )
  }
}

export const  getUser = ( user ) => {
  return (dispatch) => {
    dispatch({type: "GET_USER"}, user)
      fetch("/session", {
        method: 'POST',
        body: user,
        header:{
          "Content-Type": 'multipart/form-data'
        } 
      })
      .then( resp => resp.json())
      .then( foundUser => {
        debugger
        return dispatch({type:'GOT_USER', payload: foundUser})
      })
  }
}

export const  createUser = ( user ) => {
  return ( dispatch ) => {
    dispatch({type: "CREATE_USER"}, user)
    // debugger;
      fetch("/users", {
        method: 'POST',
        body: user,
        header:{
          "Content-Type": 'multipart/form-data'
        } 
      })
      .then(resp => resp.json())
      .then(newUser => {
        // debugger;
        return dispatch({type: 'CREATED_USER', payload: newUser})})
      }
  }

// export const  editUser = () => {dispatch({type: "EDIT_USER", id})}

// export const  deleteUser = () => {dispatch({type: "DELETE_USER", id})}
