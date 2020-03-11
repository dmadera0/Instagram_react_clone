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

    case "SHOW_USER":
      return {
        ...state,
        loading: true
      }

    case "SHOWING_USER":
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
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case "EDIT_USER":
      return {
        ...state,
        loading: true
      }

    case "EDITED_USER":
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    case "LOG_OUT":
      return {
        ...state,
        loading: true
      }

    case "LOGGED_OUT":
      return {
        ...state,
        users: action.payload,
        loading: false
      }

    default: 
    return state
  }
}