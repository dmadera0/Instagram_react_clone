export const getUsers = () =>{
  return ( dispatch ) => {
    dispatch({type: 'LOADING_USERS'})
      fetch('/users')
      .then(resp => resp.json())
      .then(users =>  dispatch({type: "USERS_LOADED", payload: users}) )
  }
}

// export const getUsers  = () => {dispatch({type: "ADD_USERS", users})}

// export const  findUser = ()=> {dispatch({type: "FIND_USER", id}) }

// export const  createUser = () => {dispatch({type: "CREATE_USER", user})}

// export const  editUser = () => {dispatch({type: "EDIT_USER", id})}

// export const  deleteUser = () => {dispatch({type: "DELETE_USER", id})}
