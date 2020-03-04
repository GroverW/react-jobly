import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './helpers/JoblyApi';
import UserContext from './UserContext';

function App() {
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(Boolean(token))
  const [currentUser, setCurrentUser] = useState(null);

  const logIn = ({token, user}) => {
    localStorage.setItem("token", JSON.stringify(token));
    setCurrentUser(user);
  }

  const logOut = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
  }

  const updateCurrentUser = (user) => {
    setCurrentUser(user)
  }

  useEffect(() => {
    const verifyToken = async () => {
      const userResult = await JoblyApi.getCurrentUser();
      if(userResult.username) {
        setCurrentUser(userResult);
      }
      setIsLoading(false);
    }
    verifyToken();
  }, []);

  const loadedJSX = (
    <div className="App">
      <UserContext.Provider value={{currentUser, updateCurrentUser, logIn, logOut }}>
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>)
  return isLoading ? <div>Loading...</div> : loadedJSX;
}

export default App;



