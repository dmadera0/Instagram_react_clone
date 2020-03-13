import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/SessionNavBar'
import SignUpSuccessful from "./containers/SignUpSuccessful"
import LandingPage from './containers/LandingPage';
import SignUp from './containers/SignUp';

import PostsContainer from './containers/PostsContainer';
import PostInput from './components/posts/PostInput'
import SessionUser from './components/users/SessionUser';
import EditSessionUser from './components/users/EditSessionUser';
import LogOutSession from './components/users/LogOutSession';

import './App.css';

class App extends Component {
  render(){
    
    return (
      <div className="App">
        
        <Router>
          <div>
          <Route path="/" render={props => <NavBar {...props} />} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signup/successful" component={SignUpSuccessful}/>
            <Route exact path="/explore" component={PostsContainer} />
            <Route exact path="/home" component={SessionUser} />
            <Route exact path="/posts/new" component={PostInput} />
            <Route exact path="/users/edit" component={EditSessionUser} />
            <Route exact path="/logout" component={LogOutSession} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
