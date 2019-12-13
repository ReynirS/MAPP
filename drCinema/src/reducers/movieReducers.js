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

function loadingMoviesByCinemaId(state = false, action){
  switch(action.type){
    case 'LOADING_MOVIES_BY_CINEMA_ID': return Object.assign({}, state, {
      loading: action.payload,
    });
    default: return state;
  }
}

function loadingMovieByMovieId(state = false, action){
  switch(action.type){
    case 'LOADING_MOVIE_BY_MOVIE_ID': return Object.assign({}, state, {
      loading: action.payload,
    });
    default: return state;
  }
}

const movieReducers = combineReducers({
  getMoviesByCinemaID,
  getMovieByMovieId,
  loadingMoviesByCinemaId,
  loadingMovieByMovieId
})

export default movieReducers;
