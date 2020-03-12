import React, {Component} from 'react'
import User from './User'
// import NavBar from './components/NavBar'
class SessionUser extends Component {
  render(){
    // console.log(this.props)
    // const sessionUser = this.props.user.map( (user, i) => <User key={i} id={user.id} username={user.username} email={user.email} phoneNum={user.phoneNum} image={user.image}/>)
    return(
      <div>
        <p>Session user</p>
        {/* {this.props.laoding ? <h3>...loading...</h3> : sessionUser }       */}
      </div>
    )
  }
}

export default SessionUser