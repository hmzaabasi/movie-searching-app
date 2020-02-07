import { SEARCH_MOVIES } from "./types";
import { getMovieListByKeyword } from "../../utilities/movieList.utils";

const SearchMovies = (searchText, dispatch) => {
  if (searchText.length >= 3) {
    setTimeout(async () => {
      try {
        dispatch({
          type: SEARCH_MOVIES,
          searchTerm: searchText,
          moviesList: [],
          loading: true,
          onError: {
            showError: false,
            message: ""
          }
        });
        let response = await getMovieListByKeyword(searchText);
        let responseLength = response.length;
        dispatch({
          type: SEARCH_MOVIES,
          searchTerm: searchText,
          moviesList: responseLength > 0 ? response : [],
          loading: false,
          onError: {
            showError: responseLength > 0 ? false : true,
            message: responseLength > 0 ? "" : "No Match Found"
          }
        });
      } catch (error) {
        dispatch({
          type: SEARCH_MOVIES,
          searchTerm: searchText,
          moviesList: [],
          loading: false,
          onError: {
            showError: true,
            message: "Error: " + error.message
          }
        });
      }
    }, 300);
  }
  return {
    type: SEARCH_MOVIES,
    searchTerm: searchText,
    moviesList: [],
    loading: false,
    onError: {
      showError: false,
      message: ""
    }
  };
};

export default SearchMovies;
