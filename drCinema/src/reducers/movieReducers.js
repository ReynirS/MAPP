import { combineReducers } from 'redux';

function getMoviesByCinemaID(state = [], action){
  switch(action.type){
    case 'GET_MOVIES_BY_CINEMA_ID': return Object.assign({}, state, {
      moviesByCinemaId: action.payload,
    });
    default: return state;
  }
}

const movieShit = combineReducers({
  getMoviesByCinemaID,
})

export default movieShit;
