import { createAsyncReducer } from '../util/redux.helpers';
import { combineReducers } from 'redux';
import { keys as movieActionKeys } from './../actions/movie-page.actions';

const moviesSuccessReducer = (state, action) => {
  if (action.response.Response !== 'False') {
    return {
      ...state,
      isLoading: false,
      response: {
        ...action.response,
        results: [...action.response.Search]
      }
    };
  } else {
    return {
      ...state,
      isLoading: false,
      response: {
        ...action.response,
        results: []
      }
    };
  }
};

const moviePageReducer = combineReducers({
  movieSearch: createAsyncReducer(movieActionKeys.SEARCH_MOVIES, {
    [`${movieActionKeys.SEARCH_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),
  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS)
});

export default moviePageReducer;
