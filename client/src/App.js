import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./history";

import PrivateRoute from "./components/PrivateRoute";
import ValueList from './components/ValueList'
import Login from "./components/Login";
import Registration from "./components/Registration";


import { getValues } from "./store/actions/valuesActions";
import { logout } from "./store/actions/loginActions";

import "./App.css";

function App() {
  const loggedIn = useSelector(state => state.login.loggedIn);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.login.isLoading);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getValues());
  }, []);

  return (
    //Issac
    // <Router history={history}>
    //   <Navigation logout = {handleLogout}  />
    //   <Route exact path = '/' component = {Login}  />
    //   <Route exact path = '/register' component = {Registration} />
    //   <PrivateRoute exact path='/select-values' component={Value} />
    //   <PrivateRoute exact path='/user-values' component = {UserValues} />
    // </Router>

    //fernando's code, can be deleted
    <Router history={history}>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Registration} />
      <PrivateRoute exact path="/select-values" component={ValueList} />
      
    </Router>
  );
}

export default App;
