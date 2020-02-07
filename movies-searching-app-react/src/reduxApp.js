import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchMovies from "./redux/actions/searchMoviesAction";
import SearchBar from "./components/SearchBar/Searchbar";
import SearchResult from "./components/SearchList/SearchList";

const ReduxApp = props => {
  const moviesList = useSelector(state => state.movies.moviesList);
  const onError = useSelector(state => state.movies.onError);
  const loading = useSelector(state => state.movies.loading);

  const dispatch = useDispatch();
  const handleChange = e => {
    //Dispatch event
    dispatch(SearchMovies(e.target.value.trim(), dispatch));
  };

  return (
    <>
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
    </>
  );
};

export default ReduxApp;
