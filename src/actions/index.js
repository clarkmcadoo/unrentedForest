// import { store } from "../store";

//example request: https://api.themoviedb.org/3/movie/550?api_key=756d51b27574d082bdec5ff892e27bbe
// const BASE_URL = "https://api.themoviedb.org/3/movie/?";

const API_KEY = "&api_key=756d51b27574d082bdec5ff892e27bbe";

let movie_id;


//Direct API calls///
// const URL = {
//   topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//   upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
//   popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
// };

const URL = {
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  // nowPlaying: `https://ironmovies.herokuapp.com/api/movies?apikey=abc`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  details: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
};

export const GET_MOVIE = "GET_MOVIE";
export const GET_NOW_PLAYING = "GET_NOW_PLAYING";
export const GET_TOP_RATED = "GET_TOP_RATED";
export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const GET_ERROR = "GET_ERROR";
export const GET_DETAILS = "GET_DETAILS";

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

const getMovieDetails = id => {
  return {
    type: GET_DETAILS,
    payload: id
  }
}

const getErrors = errors => {
  return {
    type: GET_ERROR,
    payload: errors
  };
};

export const movieGetter = movieTitle => {
  let query = movieTitle.replace(/" "/g, "+");
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then(response => {
        return response.json();
      })
      .then(foundMovie => {
        dispatch(getMovie(foundMovie.results));
      })
      .catch(err => dispatch(getErrors(err)));
  };
};

export const playingNowMovies = moviesNowPlaying => {
  return dispatch => {
    fetch(URL.nowPlaying)
      .then(response => {
        return response.json();
      })
      .then(nowPlayingMovies => {
        console.log("NOw Playing:", nowPlayingMovies)
        dispatch(getNowPlaying(nowPlayingMovies.results));
      })
      .catch(err => dispatch(getErrors(err)));
  };
};

export const upcomingMovies = upcoming => {
  return dispatch => {
    fetch(URL.upcoming)
      .then(response => {
        return response.json();
      })
      .then(moviesComingSoon => {
        dispatch(getUpcomingMovies(moviesComingSoon.results));
      })
      .catch(err => dispatch(getErrors(err)));
  };
};

export const topRatedMovies = topRatedMovies => {
  return dispatch => {
    fetch(URL.topRated)
      .then(response => {
        return response.json();
      })
      .then(topRated => {
        dispatch(getTopRated(topRated.results));
      })
      .catch(err => dispatch(getErrors(err)));
  };
};

export const popularMovies = popular => {
  return dispatch => {
    fetch(URL.popular)
      .then(response => {
        return response.json();
      })
      .then(popularMovies => {
        dispatch(getPopularMovies(popularMovies.results));
      })
      .catch(err => dispatch(getErrors(err)));
  };
};

export const getDetails = movieId => {
  console.log('getDetails ', movieId);
  return dispatch => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        return response.json();
      })
      .then(movieDetails => {
        dispatch(getMovieDetails(movieDetails));
      })
      .catch(err => dispatch(getErrors(err)));
  };
};


