import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ReactRedux from "./reactRedux";
import ReactContextDemo from "./reactContext";

import "./index.css";

let routes = (
  <Switch>
    <Route path="/contextapp" component={ReactContextDemo} />
    <Route path="/reduxapp" component={ReactRedux} />
    <Route path="/me-on-linkdin" component={() => {
      window.location.href = "";
    }} />
  </Switch>
);

const seperator = <span className="seperator">|</span>;

ReactDOM.render(
  <BrowserRouter>
    <div className="nav-menu">
      <div className="nav-menu-container">
        <Link to="/" className="nav-links">Home</Link>
        {seperator}
        <Link to="/reduxapp" className="nav-links">React-Redux</Link>
        {seperator}
        <Link to="/contextapp" className="nav-links">React Context Api</Link>
      </div>
    </div>
    <div className="intro">
      <h2><strong>Developed By</strong></h2>
      <a href="https://www.linkedin.com/in/hamza-iftikhar-abbasi-a95710b5/" className="me-text">
        <strong>Hamza Iftikhar</strong>
        <img src="/linkdin.png" alt="linkdin" className="me-acc" />
      </a>
      <div className="contact-me">
        <a href="mailto:hmzaiftikhar@gmail.com" className="me-text"><img src="/mail.png" alt="gmail" className="me-acc" /></a>
        {seperator}
        <a href="skype:live:hmzaiftikhar?chat" className="me-text"><img src="/skype.png" alt="skype" className="me-acc" /></a>
        {seperator}
        <a href="https://github.com/hmzaabasi" className="me-text"><img src="/git.png" alt="git" className="me-git" /></a>
      </div>
    </div>
    {routes}
  </BrowserRouter>,
  document.getElementById("root")
);
