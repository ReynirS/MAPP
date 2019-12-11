import { combineReducers } from 'redux';
import theaters from './theaterReducer';
import movies from './movieReducers';
//import cinema from './cinemaReducer';

export default combineReducers({
  theaters,
  movies
})
