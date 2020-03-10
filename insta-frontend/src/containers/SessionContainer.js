import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getUser } from '../actions/Users'
import SessionUser from '../components/users/SessionUser'
class SessionContainer extends Component {

  state = {
    users: []
  }

  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.loading !== this.props.loading) {
      this.setState({
        users: this.props.users,
        loading: this.props.loading
      }, console.log(this.state))
    }
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