import React from 'react';
// import LandingPage from './components/root/LandingPage'
import Posts from './components/posts/Posts'
import PostsInput from './components/posts/PostInput'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Instagram</p>
      {/* < LandingPage /> */}
      < Posts />
      < PostsInput />
    </div>
  );
}

export default App;
