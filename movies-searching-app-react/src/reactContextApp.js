import React, { useContext } from "react";

import SearchBar from "./components/context/SearchBar/Searchbar";
import SearchResult from "./components/context/SearchList/SearchList";
import { MoviesContext } from "./context/movieList.context";

const ReactContextApp = props => {
  const { loading, onError, moviesList } = useContext(MoviesContext);
  return (
    <div className="App">
      <div className="content-container">
        <SearchBar />
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
