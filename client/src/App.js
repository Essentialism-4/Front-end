import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./history";

import PrivateRoute from "./components/PrivateRoute";
import Values from "./components/Values";
import Login from "./components/Login";
import Registration from './components/Registration';
import Navigation from "./components/Navigation";

import { getValues } from "./store/actions/values.actions";
import { logout } from "./store/actions/login.actions";


import "./App.css";

function App() {
  const loggedIn = useSelector(state => state.login.loggedIn);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login.isLoading);

  const handleLogout = e => {
    e.preventDefault()
    dispatch(logout());
  }

  useEffect(() => {
    dispatch(getValues());
  }, []);

  return (
    <Router history={history}>
      <Navigation logout = {handleLogout}  />
      <Route exact path = '/' component = {Login}  />
      <Route exact path = '/register' component = {Registration} />
      <PrivateRoute exact path='/select-values' component={Values} />
    </Router>
  );
}

export default App;
