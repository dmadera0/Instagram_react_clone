import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/SessionNavBar'
import PostInput from './components/posts/PostInput'
import SessionUser from './components/users/SessionUser';
import EditSessionUser from './components/users/EditSessionUser';
import LogOutSession from './components/users/LogOutSession';

import SignUpSuccessful from "./containers/SignUpSuccessful"
import LandingPage from './containers/LandingPage';
import SignUp from './containers/SignUp';
import PostsContainer from './containers/PostsContainer';


import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }
  render(){



    return (
      <div className="App">
        
        <Router  >   
               
          <Route path="/home" render={props => <NavBar {...props} />} />
          <Route path="/explore" render={props => <NavBar {...props} />} />
          <Route path="/posts/new" render={props => <NavBar {...props} />} />
          <Route path="/users/edit" render={props => <NavBar {...props} />} />
          <Route path="/logout" render={props => <NavBar {...props} />} />
          <Switch >  
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signup/successful" component={SignUpSuccessful}/>
            <Route exact path="/explore" component={PostsContainer}  />}/>
            <Route exact path="/home" component={SessionUser} />
            <Route exact path="/posts/new" component={PostInput} />
            <Route exact path="/users/edit" component={EditSessionUser} />
            <Route exact path="/logout" component={LogOutSession} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
