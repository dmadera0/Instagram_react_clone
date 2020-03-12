import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import NavBar from './components/NavBar'
import SignUpSuccessful from "./containers/SignUpSuccessful"
import LandingPage from './containers/LandingPage';
import SignUp from './containers/SignUp';

import Session from './components/users/Session';
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
            <Route exact path="/posts/new" component={PostInput} />
            <Route exact path="/session" component={Session} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
