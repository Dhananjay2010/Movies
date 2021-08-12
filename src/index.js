import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customers from "./Customers";
import Rentals from "./Rentals";
import Login from "./Login";
import Navbar from "./Navbar.jsx"


ReactDOM.render(

  <Router>
    <Navbar />
    <Switch>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/rentals">
        <Rentals />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>

  , document.getElementById('root')
);
