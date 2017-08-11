import { combineReducers } from "redux";
import _ from "lodash";
import {
  GET_MOVIE,
  GET_NOW_PLAYING,
  GET_ERROR,
  GET_TOP_RATED,
  GET_UPCOMING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_DETAILS
} from "../actions";

const initialState = {
  movies: [],
  subheader: "",
  hasErrored: "No Errors ☺",
  movieDetails: []
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case GET_MOVIE:
      newState.movies = action.payload;
      return newState;
    case GET_NOW_PLAYING:
      newState.movies = action.payload;
      newState.subheader = "NOW PLAYING";
      return newState;
    case GET_TOP_RATED:
      newState.movies = action.payload;
      newState.subheader = "TOP RATED MOVIES";
      return newState;
    case GET_UPCOMING_MOVIES:
      newState.movies = action.payload;
      newState.subheader = "UPCOMING MOVIES";
      return newState;
    case GET_POPULAR_MOVIES:
      newState.movies = action.payload;
      newState.subheader = "POPULAR MOVIES";
      return newState;
    case GET_ERROR:
      newState.hasErrored = action.payload;
      newState.subheader = "AN ERROR HAS OCCURED";      
      return newState;
    case GET_DETAILS:
      newState.movieDetails = action.payload;
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  titles: reducer
});

export default rootReducer;
