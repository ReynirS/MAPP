import { combineReducers } from 'redux';

function getUpcomingMovies(state = [], action){
  switch(action.type){
    case 'GET_UPCOMING_MOVIES': return Object.assign({}, state, {
      upcomingMovies: action.payload,
    });
    default: return state;
  }
}

const upcomingMoviesReducers = combineReducers({
  getUpcomingMovies,
})

export default upcomingMoviesReducers;
