export default (state = { users:[], loading: false}, action ) => {
  switch(action.type){
    case "LOADING_TODOS":
      return {
        ...state,
        loading: true
      }

    case "USERS_LOADED":
      return {
        users: action.payload,
        laoding: false
      }

    case "GET_USER":
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