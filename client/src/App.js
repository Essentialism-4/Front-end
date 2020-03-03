import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import ValueList from './components/ValueList';
import Login from './components/Login';
import Registration from './components/Registration';

import { getUserInfo } from './store/actions/userActions';

import "./App.css";

function App({getUserInfo}) {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token) {
      getUserInfo(token);
    }
  }, [token, getUserInfo]);

  return (
    <Router>
      <div className="App">
        <Route path = {'/' || '/login'} component = {Login} />
        <Route exact path = '/register' component = {Registration} />
        <PrivateRoute exact path = '/'  component = {ValueList} />
      </div>
    </Router>
  );
}

export default App;
