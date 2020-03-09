import React, { Component }  from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar'
// import PostsContainer from './containers/PostsContainer';
// import UsersContainer from './containers/UsersContainer';
// import SignUp from './containers/SignUp';
import LandingPage from './containers/LandingPage';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Instagram</h1>
        {/* <PostsContainer /> */}
        {/* <UsersContainer />
        <SignUp /> */}
        <LandingPage />

        <Router>
          <div>
            <NavBar />
            <Route exact path="/" render={() => <div>Home</div>} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
