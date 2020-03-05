import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Jobs from './Jobs';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import Company from './Company';
import Companies from './Companies';
import Home from './Home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

function Routes() {

  return (
    <Switch>

      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <PrivateRoute exact path="/jobs">
        <Jobs />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute exact path="/companies/:handle">
        <Company />
      </PrivateRoute>
      <PrivateRoute exact path="/companies">
        <Companies />
      </PrivateRoute>
      <PrivateRoute exact path="/">
        <Home />
      </PrivateRoute>
      <Route>
        <NotFound />
      </Route>

    </Switch>
  )
}

export default Routes;