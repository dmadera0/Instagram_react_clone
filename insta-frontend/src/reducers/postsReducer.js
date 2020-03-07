export default (state = { posts:[], loading: false}, action ) => {
  switch(action.type){

    case 'ADD_POSTS':
      return state

    case "CREATE_POST":
      return state 

    case "EDIT_POST":
      return state

    case "DELETE_POST":
      return state

    default: 
    return state
  }

}