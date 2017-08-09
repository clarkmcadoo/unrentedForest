import { movieGetter, getNowPlaying } from "../actions";
import { combineReducers } from "redux";
import _ from "lodash";

const initalState = {
  movies: []
};

const reducer = (state = initalState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case GET_MOVIE:
      newState.movies = action.payload;
      console.log("GET_MOVIE action returned:", newState.movies);
      return newState.movies;
    case GET_NOW_PLAYING:
      newState.movies = action.payload;
      console.log("GET_NOW_PLAYING action returned:", newState.movies);
      return newState.movies;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies: reducer
});

export default rootReducer;
