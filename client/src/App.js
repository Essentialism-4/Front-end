import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./history";

import PrivateRoute from "./components/PrivateRoute";
import UserValues from './components/UserValues';
import ValueList from './components/ValueList'
import Login from "./components/Login";
import Registration from "./components/Registration";
import UserProfile from './components/UserProfile';

import { getValues } from "./store/actions/valuesActions";

import "./App.css";

function App() {
  const loggedIn = useSelector(state => state.login.loggedIn);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login.isLoading);

  useEffect(() => {
    dispatch(getValues())
  }, []);
  return (
    <Router history={history}>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Registration} />
      <PrivateRoute exact path="/select-values" component={ValueList} />
      <PrivateRoute exact path="/user-values" component={UserValues} />
      <PrivateRoute exact path = '/user/:id/profile' component = {UserProfile} />
    </Router>
  );
}

export default App;
