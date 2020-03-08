import React, { Component }  from 'react';
import PostsContainer from './containers/PostsContainer';
import UsersContainer from './containers/UsersContainer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Instagram</h1>
        {/* <PostsContainer /> */}
        <UsersContainer />
      </div>
    );
  }
}
export default App;
