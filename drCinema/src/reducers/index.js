import { combineReducers } from 'redux';
import theaters from './theaterReducer';
import movies from './movieReducers';
import upcomingMovies from './upcomingMoviesReducers';

export default combineReducers({
  theaters,
  movies,
  upcomingMovies
})
