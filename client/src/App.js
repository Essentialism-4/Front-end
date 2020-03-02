<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import UserValues from "./components/UserValues";

import { axiosWithAuth } from "./utils/axiosWithAuth";

import "./App.css";
||||||| merged common ancestors
import React from 'react';
import './App.css';
=======
import React from 'react';
import './App.css';
import Registration from './components/Registration'
import Login from './components/Login'
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';
>>>>>>> e02c4ed3158a072c8921cce6a71ecc73e19b21c3

function App() {
<<<<<<< HEAD
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token ? true : false);

  const register = payload => {
    axiosWithAuth()
      .post("api/auth/register", payload)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => console.log(err));
  };

  const login = credentials => {
    axiosWithAuth()
      .post("api/auth/login", credentials)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setLoggedIn(loggedIn === false ? false : true);
  }, []);

  return (
    <Router>
      <div className="App">
        <Route path = '/' />
          <PrivateRoute exact path = '/' isLoggedin = {loggedIn}  />
      </div>
    </Router>
||||||| merged common ancestors
  return (
    <div className="App">

    </div>
=======
  return (
    <div className="App">
      <Navigation />
      <Route path ='/registration'>
        <Registration />
       </Route>
       <Route path='/login'>
         <Login />
       </Route>
    </div>
>>>>>>> e02c4ed3158a072c8921cce6a71ecc73e19b21c3
  );
}

export default App;
