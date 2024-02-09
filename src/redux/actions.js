
import axios from 'axios';


export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const FETCH_POPULAR_MOVIES_REQUEST = 'FETCH_POPULAR_MOVIES_REQUEST';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_FAILURE = 'FETCH_POPULAR_MOVIES_FAILURE';

const apiKey = '793f529e214f3b041b733709431628c4';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;


export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

const fetchPopularMoviesRequest = () => ({
  type: FETCH_POPULAR_MOVIES_REQUEST,
});

const fetchPopularMoviesSuccess = (movies) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

const fetchPopularMoviesFailure = (error) => ({
  type: FETCH_POPULAR_MOVIES_FAILURE,
  payload: error,
});

export const fetchPopularMovies = () => {
  return (dispatch) => {
    dispatch(fetchPopularMoviesRequest());
    axios
      .get(apiUrl)
      .then((response) => {
        const movies = response.data.results;
        dispatch(fetchPopularMoviesSuccess(movies));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPopularMoviesFailure(errorMsg));
      });
  };
};
