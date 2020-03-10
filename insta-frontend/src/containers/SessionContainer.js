import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/Users'
import SessionUser from '../components/users/SessionUser'
class SessionContainer extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return nextProps.loading !== this.props.loading
  }
  render(){
    return(<div>
      Session COntainer
    </div>)
  }
}

const mapStateToProps = state => {
  // console.log(state.users.loading, state.users.users)
  return {
    users: state.users.users,
    loading: state.users.loading
  }
}

export default connect(mapStateToProps, { getUser })(SessionContainer);