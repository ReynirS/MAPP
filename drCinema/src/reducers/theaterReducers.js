import {combineReducers} from 'redux';

function getAllTheaters(state = [], action){
  switch(action.type){
    case 'GET_THEATERS': return Object.assign({}, state, {
      theaters: action.payload,
    });
    default: return state;
  }
}

function getCinemaById(state = {}, action){
  switch(action.type){
    case 'GET_THEATER_BY_ID': return Object.assign({}, state, {
      theater: action.payload
    });
    default: return state;
  }
}

function cinemaIsLoading(state = false, action){
  switch(action.type){
    case 'LOADING_CINEMA_BY_ID': return Object.assign({}, state, {
      loading: action.payload
    });
    default: return state;
  }
}
const theaterReducers = combineReducers({
  getAllTheaters,
  getCinemaById,
  cinemaIsLoading,
})

export default theaterReducers;
