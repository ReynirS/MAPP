import { combineReducers } from 'redux';
import theaters from './theaterReducer';
import movies from './movieReducers';
import upcomingMovies from './upcomingMoviesReducers';
//import cinema from './cinemaReducer';

export default combineReducers({
  theaters,
  movies,
  upcomingMovies
})
