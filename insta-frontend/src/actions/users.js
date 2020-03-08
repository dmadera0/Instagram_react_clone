export const getUsers = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_USERS'})
      fetch('/users')
      .then(resp => resp.json())
      .then(users =>  dispatch({type: "USERS_LOADED", payload: users}) )
  }
}


// export const  findUser = () => {dispatch({type: "FIND_USER", id}) }

export const  createUser = ( user ) => {
  return (dispatch) => {
    dispatch({type: "CREATE_USER"}, user)
    fetch("/users", {
      method: 'POST',
      body: JSON.stringify(user),
      header:{
        "Content-Type": 'application/json'
      } 
    })
    .then(resp => resp.json())
    .then(newUser => {
      debugger;
      return dispatch({type: 'CREATED_USER', payload: newUser})})
    }
  }

// export const  editUser = () => {dispatch({type: "EDIT_USER", id})}

// export const  deleteUser = () => {dispatch({type: "DELETE_USER", id})}
