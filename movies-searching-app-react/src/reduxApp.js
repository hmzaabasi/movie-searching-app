import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SearchMovies from "./redux/actions/searchMoviesAction";
import Content from "./components/content/content";

const ReduxApp = props => {
  const moviesList = useSelector(state => state.movies.moviesList);
  const onError = useSelector(state => state.movies.onError);
  const loading = useSelector(state => state.movies.loading);

  const dispatch = useDispatch();
  const handleChange = e => (
    dispatch(SearchMovies(e.target.value.trim(), dispatch))
  );

  return (
    <Content
      pageTitle={"React + Redux"}
      moviesList={moviesList}
      onError={onError}
      loading={loading}
      handleChange={handleChange}
    />
  );
};

export default ReduxApp;
