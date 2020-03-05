import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./history";

import PrivateRoute from "./components/PrivateRoute";
import Value from "./components/Values";
import UserValues from './components/UserValues';
import Login from "./components/Login";
import Registration from './components/Registration';
import Navigation from "./components/Navigation";

import { getValues } from "./store/actions/valuesActions";
import { logout } from "./store/actions/loginActions";


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
      <PrivateRoute exact path='/select-values' component={Value} />
      <PrivateRoute exact path='/user-values' component = {UserValues} />
    </Router>
  );
}

export default App;
