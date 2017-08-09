import { combineReducers } from "redux";
import _ from "lodash";
import {GET_MOVIE} from "../actions";
import {GET_NOW_PLAYING} from "../actions";


const initialState = {
  movies: [],
  subheader: ""
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case GET_MOVIE:
      newState.movies = action.payload;
      console.log("GET_MOVIE action returned:", newState.movies);
      return newState;
    case GET_NOW_PLAYING:
      newState.movies = action.payload;
      console.log("GET_NOW_PLAYING action returned:", newState.movies);
      newState.subheader = "NOW PLAYING";
      return newState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  titles: reducer
});

export default rootReducer;
