import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import NavBar from './components/NavBar'
import PostsContainer from './containers/PostsContainer';
import UsersContainer from './containers/UsersContainer';
import SignUpSuccessful from "./containers/SignUpSuccessful"
import LandingPage from './containers/LandingPage';
import SignUp from './containers/SignUp';
import SessionUser from './components/users/SessionUser';
import PostInput from './components/posts/PostInput'
import './App.css';

class App extends Component {
  render(){
    
    return (
      <div className="App">
        
        <Router>
        {/* <NavBar /> */}
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signup/successful" component={SignUpSuccessful}/>
            <Route exact path="/users" component={UsersContainer} />
            <Route exact path="/posts" component={PostsContainer} />
            <Route exact path="/posts/new" component={PostInput} />
            <Route exact path="/home" component={SessionUser} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
