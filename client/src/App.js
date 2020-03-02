import React from 'react';
import './App.css';
import Registration from './components/Registration'
import Login from './components/Login'
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
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
  );
}

export default App;
