import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ReactRedux from "./reactRedux";
import ReactContextDemo from "./reactContext";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Link to="/reduxapp">React-Redux</Link>
    <Link to="/contextapp">React Context Api</Link>
    <Switch>
      <Route path="/contextapp" component={ReactContextDemo} />
      <Route path="/reduxapp" component={ReactRedux} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
