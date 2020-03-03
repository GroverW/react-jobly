import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
        <Switch>
          <Route exact path="/jobs">
            
          </Route>
          <Route exact path="/login">
            
          </Route>
          <Route exact path="/profile">
            
          </Route>
          <Route exact path="/companies/:handle">
            
          </Route>
          <Route exact path="/companies">
            
          </Route>
          <Route exact path="/">
            
          </Route>
          <Route>
            <NotFound />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
