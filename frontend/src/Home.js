import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import UserContext from './UserContext';

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Home">
      <h1>Jobly</h1>
      <h3>Best Jobs Ever. Get you job here!</h3>
      {
        currentUser
          ? <h2>Welcome Back, {currentUser.username}!</h2>
          : <Link to="/login" >Log in</Link>
      }

    </div>
  )
}

export default Home;