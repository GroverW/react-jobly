import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to='/'>Jobly</NavLink>
      <NavLink to='/jobs'>Jobs</NavLink>
      <NavLink to='/companies'>Companies</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </nav>
  )
}

export default NavBar;