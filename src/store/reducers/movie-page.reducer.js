import { createAsyncReducer } from '../util/redux.helpers';
import { combineReducers } from 'redux';
import { keys as movieActionKeys } from './../actions/movie-page.actions';

/**
 * On successful(ly returned**) get for movies make sure the response is not an
 * error then set the current movie list to the results, otherwise
 * clear the array.
 *
 * @param state the current state
 * @param action the result of the action
 */
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
  })
});

export default moviePageReducer;
