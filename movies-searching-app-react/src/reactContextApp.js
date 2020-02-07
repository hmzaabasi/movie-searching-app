import React, { useContext } from "react";

import SearchBar from "./components/SearchBar/Searchbar";
import SearchResult from "./components/SearchList/SearchList";
import { MoviesContext } from "./context/movieList.context";

const ReactContextApp = props => {
  const { loading, onError, moviesList } = useContext(MoviesContext);
  const { setSearchTextVal } = useContext(MoviesContext);

  const handleChange = e => {
    setSearchTextVal(e.target.value.trim());
  };
  return (
    <div className="App">
      <div className="content-container">
        <SearchBar handleChange={handleChange} />
        {moviesList.length > 0 && <SearchResult moviesList={moviesList} />}
        {onError.showError && (
          <div>
            <strong>{onError.message}</strong>
          </div>
        )}
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default ReactContextApp;
