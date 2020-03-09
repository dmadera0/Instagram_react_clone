export default (state = { users:[], loading: false}, action ) => {
  switch(action.type){
    case "LOADING_USERS":
      return {
        ...state,
        loading: true
      }

    case "USERS_LOADED":
      return {
        users: action.payload,
        loading: false
      }

    case "CREATE_USER":
      console.log("creating user")
      return{
        ...state,
        loading: true
      }

    case "CREATED_USER":
      console.log("created it!?")
      return {
        users: [...state.users, action.payload], 
        loading: false
      }
    
    case "GET_USER":
      console.log("getting user")
      return {
        ...state,
        loading: true
      }

    case "GOT_USER":
      console.log("got user?!")
      return{
        users:[...state.users, action.payload],
        loading: false
    }

    case "EDIT_USER":
      return state 

    case "DELETE_USER":
      return state

    default: 
    return state
  }
}