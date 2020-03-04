import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  const INITIAL_STATE = Boolean(localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);

  const logIn = () => {
    setIsLoggedIn(true);
  }

  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} logOut={logOut}/>
        <Routes logIn={logIn}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
