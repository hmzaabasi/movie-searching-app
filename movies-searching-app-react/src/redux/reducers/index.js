import { combineReducers } from "redux";
import MoviesReducer from "./moviesReducer";

export default combineReducers({
  movies: MoviesReducer
});
