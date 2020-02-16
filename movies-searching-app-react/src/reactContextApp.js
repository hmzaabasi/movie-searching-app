import React, { useContext } from "react";

import Content from "./components/content/content";
import { MoviesContext } from "./context/movieList.context";

const ReactContextApp = props => {
  const { loading, onError, moviesList } = useContext(MoviesContext);
  const { setSearchTextVal } = useContext(MoviesContext);

  const handleChange = e => (
    setSearchTextVal(e.target.value.trim())
  );
  return (
    <Content
      pageTitle={"React Context"}
      moviesList={moviesList}
      onError={onError}
      loading={loading}
      handleChange={handleChange}
    />
  );
};

export default ReactContextApp;
