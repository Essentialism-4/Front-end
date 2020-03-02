import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import UserValues from "./components/UserValues";

import { axiosWithAuth } from "./utils/axiosWithAuth";

import "./App.css";

function App() {
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
  );
}

export default App;
