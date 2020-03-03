import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
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
        <Route exact path = {'/'} component = {Login} />
        <Route exact path = '/register' component = {Registration} />
        <PrivateRoute exact path = '/select-values'  component = {ValueList} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {};
}

export default connect (
  mapStateToProps,
  { getUserInfo }
)(App);
