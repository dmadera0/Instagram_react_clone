import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'lightblue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return(


    <div className="navbar">
      <NavLink to='/home' style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}>Home</NavLink> | 


      <NavLink to='/posts/new' style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}>Create Post</NavLink> |

      <NavLink to='/users/edit' exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >Edit Profile</NavLink> | 


      <NavLink to='/explore'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >Explore</NavLink> | 


      <NavLink to='/logout'exact
      style={link}
      activeStyle={{
        background: 'white',
        color: 'black'
      }}
    >Logout</NavLink> | 



      

    </div>




  ) 
}
export default NavBar;