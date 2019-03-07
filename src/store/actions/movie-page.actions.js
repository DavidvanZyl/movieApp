import { createAsyncAction } from './../util/redux.helpers';
import * as movieApi from './../../api/api';

/**
 * List of actions which affect the state at the Movie Page level
 * NOTE: Other states may use different keys
 */
export const keys = {
  SEARCH_MOVIES: 'SEARCH_MOVIES'
};

export const searchMovies = (s, page) =>
  createAsyncAction(keys.SEARCH_MOVIES, movieApi.searchMovies, {
    s,
    page
  });
