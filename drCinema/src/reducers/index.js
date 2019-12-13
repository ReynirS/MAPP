import { combineReducers } from 'redux';
import theaters from './theaterReducers';
import movies from './movieReducers';
import upcomingMovies from './upcomingMoviesReducers';

export default combineReducers({
  theaters,
  movies,
  upcomingMovies
})
