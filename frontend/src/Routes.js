import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Jobs from './Jobs';
import Login from './Login';
import Profile from './Profile';
import Company from './Company';
import Companies from './Companies';
import Home from './Home';
import NotFound from './NotFound';




function Routes() {

  return (
    <Switch>

      <Route exact path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/companies/:handle">
        <Company />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>

    </Switch>
  )
}

export default Routes;