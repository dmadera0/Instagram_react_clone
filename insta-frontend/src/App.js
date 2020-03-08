import React, { Component }  from 'react';
// import PostsContainer from './containers/PostsContainer';
import UsersContainer from './containers/UsersContainer';
import SignUp from './containers/SignUp';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Instagram</h1>
        {/* <PostsContainer /> */}
        <UsersContainer />
        <SignUp />
      </div>
    );
  }
}
export default App;
