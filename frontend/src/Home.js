import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Jobly</h1>
      <h3>Best Jobs Ever. Get you job here!</h3>
      <Link to="/login" >Log in</Link>
    </div>
  )
}

export default Home;