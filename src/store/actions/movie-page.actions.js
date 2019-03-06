import { createAsyncAction } from './../util/redux.helpers';
import * as movieApi from './../../api/api';

export const keys = {
  SEARCH_MOVIES: 'SEARCH_MOVIES',
  GET_MOVIE_DETAILS: 'GET_MOVIE_DETAILS'
};

export const searchMovies = (s, page) =>
  createAsyncAction(keys.SEARCH_MOVIES, movieApi.searchMovies, {
    s,
    page
  });

export const getMovieDetails = movieId =>
  createAsyncAction(keys.GET_MOVIE_DETAILS, movieApi.getMovieDetails, {
    movieId
  });
