import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from './UserContext';

function NavBar() {
  const { currentUser, logOut } = useContext(UserContext);
  
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
  
  return currentUser ? loggedInJSX : loggedOutJSX
}

export default NavBar;