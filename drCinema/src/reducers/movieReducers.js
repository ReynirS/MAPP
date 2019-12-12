import { combineReducers } from 'redux';

function getMoviesByCinemaID(state = [], action){
  switch(action.type){
    case 'GET_MOVIES_BY_CINEMA_ID': return Object.assign({}, state, {
      moviesByCinemaId: action.payload,
    });
    default: return state;
  }
}

function getMovieByMovieId(state = [], action){
  switch(action.type){
    case 'GET_MOVIE_BY_MOVIE_ID': return Object.assign({}, state, {
      movieByMovieId: action.payload,
    });
    default: return state;
  }
}

const movieShit = combineReducers({
  getMoviesByCinemaID,
  getMovieByMovieId
})

export default movieShit;
