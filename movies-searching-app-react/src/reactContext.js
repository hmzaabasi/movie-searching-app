import React from "react";

import ReactContextApp from "./reactContextApp";
import MoviesProvider from "./context/movieList.context";

const ReactContextDemo = props => {
  return (
    <MoviesProvider>
      <ReactContextApp />
    </MoviesProvider>
  );
};

export default ReactContextDemo;
