import React from 'react'
import { connect } from 'react-redux'
import { logOut } from "../../actions/users"
import { useHistory } from 'react-router-dom'


function LogOutSession(props) {
  const { id } = props.user
  console.log(id)
  let history = useHistory();
  function logOut() {
    props.logOut(props.user)
    history.push('/')
  }
  

  return(
  <div>
    {<br></br>}
    {<br></br>}
    {<br></br>}
    <button onClick={logOut}>Log Out?</button>
  </div>
  )
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.currentUser)
  return {
    user: state.users.currentUser,
    loading: state.users.loading
  }
}


export default connect(mapStateToProps, { logOut })(LogOutSession)