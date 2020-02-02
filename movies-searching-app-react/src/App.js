import React, { useContext } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/Searchbar";
import SearchResult from "./components/SearchList/SearchList";
import { MoviesContext } from "./context/movieList.context";

function App() {
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
}

export default App;
