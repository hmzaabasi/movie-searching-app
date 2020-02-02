import React, { createContext, useState } from "react";

import { getMovieListByKeyword } from "./movieList.utils";

export const MoviesContext = createContext({
  onError: {
    showError: false,
    message: ""
  },
  loading: false,
  moviesList: [],
  setSearchTextVal: () => {}
});

const MoviesProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [onError, setOnError] = useState({
    showError: false,
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const setSearchTextVal = val => {
    try {
      if (val.length >= 3) {
        setTimeout(async () => {
          // make api request
          setLoading(true);
          let moviesArray = await getMovieListByKeyword(val);
          if (moviesArray.length <= 0) {
            setOnError({
              showError: true,
              message: "No Matching Record Found!"
            });
          }
          setMoviesList(moviesArray);
          setLoading(false);
        }, 300);
      } else {
        setMoviesList([]);
        setOnError({
          showError: false,
          message: ""
        });
      }
    } catch (error) {
      console.log(error);
      setOnError({
        showError: true,
        message: "Error in processing!"
      });
    }
  };

  return (
    <MoviesContext.Provider
      value={{ loading, onError, moviesList, setSearchTextVal }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
