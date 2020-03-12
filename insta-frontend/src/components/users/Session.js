import React from 'react'
import NavBar from '../SessionNavBar'
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import PostsContainer from '../../containers/PostsContainer';
import PostInput from '../posts/PostInput'
import SessionUser from './SessionUser';
function Session() {
  return(
    <div>
      <Router>
          <div>
            <NavBar />
            <Route exact path="/explore" component={PostsContainer} />
            <Route exact path="/home" component={SessionUser} />
            <Route exact path="/posts/new" component={PostInput} />
            <Redirect to="/home" />
          </div>
        </Router>

    </div>
  )
}

export default Session;