import { combineReducers } from 'redux';

function getMoviesByCinemaId(state = [], action){
  switch(action.type){
    case 'GET_MOVIES_BY_CINEMA_ID': return Object.assign({}, state, {
      moviesByCinemaId: action.payload,
    });
    default: return state;
  }
}

const movieShit = combineReducers({
  getMoviesByCinemaId,
})

export default movieShit;
