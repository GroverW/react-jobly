import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ isLoggedIn, logOut }) {
  
  const loggedInJSX = (
    <nav>
      <NavLink to='/'>Jobly</NavLink>
      <NavLink to='/jobs'>Jobs</NavLink>
      <NavLink to='/companies'>Companies</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/' onClick={logOut}>LogOut</NavLink>
    </nav>

  )

  const loggedOutJSX = (
    <nav>
      <NavLink to='/'>Jobly</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
  )
  
  return isLoggedIn ? loggedInJSX : loggedOutJSX
}

export default NavBar;