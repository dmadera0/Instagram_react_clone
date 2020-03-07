export default (state = { users:[], loading: false}, action ) => {
  switch(action.type){

    case "ADD_USERS":
      return state

    case "CREATE_USER":
      return state 
    
    case "EDIT_USER":
      return state 

    case "DELETE_USER":
      return state

    default: 
    return state
  }
}