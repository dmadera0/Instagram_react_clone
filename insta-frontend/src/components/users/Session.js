import React from 'react'
import NavBar from '../SessionNavBar'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import PostsContainer from '../../containers/PostsContainer';
import PostInput from '../posts/PostInput'
import SessionUser from './SessionUser';
import EditSessionUser from './EditSessionUser';
import LogOutSession from './LogOutSession';

function Session() {
  return(
    <div>
      <Router>
          <div>
            <NavBar />
            <Route exact path="/explore" component={PostsContainer} />
            <Route exact path="/home" component={SessionUser} />
            <Route exact path="/posts/new" component={PostInput} />
            <Route exact path="/users/edit" component={EditSessionUser} />
            <Route exact path="/logout" component={LogOutSession} />
            <Redirect to="/home" />
          </div>
        </Router>

    </div>
  )
}

export default Session;