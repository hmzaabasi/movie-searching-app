import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import MoviesProvider from "./context/movieList.context";

import "./index.css";

ReactDOM.render(
  <MoviesProvider>
    <App />
  </MoviesProvider>,
  document.getElementById("root")
);
