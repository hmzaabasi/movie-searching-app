import { SEARCH_MOVIES } from "../actions/types";

const initialState = {
  searchTerm: "",
  moviesList: [],
  loading: false,
  onError: {
    showError: false,
    message: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        searchTerm: action.searchTerm,
        moviesList: action.moviesList,
        loading: action.loading,
        onError: {
          showError: action.onError.showError,
          message: action.onError.message
        }
      };

    default:
      return {
        ...state
      };
  }
}
