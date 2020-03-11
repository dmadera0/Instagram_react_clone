import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import NavBar from './components/NavBar'
import PostsContainer from './containers/PostsContainer';
import UsersContainer from './containers/UsersContainer';
import SignUp from './containers/SignUp';
import SessionContainer from './containers/SessionContainer';
import LandingPage from './containers/LandingPage';
import './App.css';

class App extends Component {
  render(){
    
    return (
      <div className="App">
        
        <Router>
        {/* <NavBar /> */}
          <div>
            <Route exact path="/home" component={LandingPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/users" component={UsersContainer} />
            <Route exact path="/posts" component={PostsContainer} />
          </div>
        </Router>
        < SessionContainer />
      </div>
    );
  }
}
export default App;
