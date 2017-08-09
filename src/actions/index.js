import { store } from "../store";

//example request: https://api.themoviedb.org/3/movie/550?api_key=756d51b27574d082bdec5ff892e27bbe
const BASE_URL = "https://api.themoviedb.org/3/movie/?";
const API_KEY = "&api_key=756d51b27574d082bdec5ff892e27bbe";
const moviesNowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export const GET_MOVIE = "GET_MOVIE";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";

const getMovie = movieQuery => {
  return {
    type: GET_MOVIE,
    payload: movieQuery
  };
};

const getNowPlaying = nowPlaying => {
  return {
    type: GET_NOW_PLAYING,
    payload: nowPlaying
  };
};

const getTopRated = topRated => {
  return {
    type: GET_TOP_RATED,
    payload: topRated
  };
};

const getUpcomingMovies = upcomingMovies => {
  return {
    type: GET_UPCOMING_MOVIES,
    payload: upcomingMovies
  };
};

const getPopularMovies = popularMovies => {
  return {
    type: GET_POPULAR_MOVIES,
    payload: popularMovies
  };
};

export const movieGetter = movieTitle => {
  let query = movieTitle.replace(/\" "/g, "+");
  //Need to make spaces become '+' for movieTitle query
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(response => {
        console.log(`response for fetching ${query}:`, response);
        return response.json();
      })
      .then(foundMovie => {
        console.log(`Movie(s) found for ${query}:`, foundMovie);
        dispatch(getMovie(foundMovie));
      })
      .catch(() => console.log("ERROR with `movieGetter` action!!!"));
  };
};

export const playingNow = moviesNowPlaying => {
  return dispatch => {
    fetch(moviesNowPlaying)
      .then(response => {
        console.log("response for getting movies Now Playing:", response);
        return response.json();
      })
      .then(nowPlayingMovies => {
        console.log("Movies Currently Playing:", nowPlayingMovies);
        dispatch(getNowPlaying(nowPlayingMovies));
      })
      .catch(() => console.log("ERROR with `playingNow` action!!!"));
  };
};

