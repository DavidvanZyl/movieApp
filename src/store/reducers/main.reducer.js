import { combineReducers } from 'redux';
import moviePageReducer from './movie-page.reducer';

const mainReducer = combineReducers({
  moviePage: moviePageReducer
});

export default mainReducer;
