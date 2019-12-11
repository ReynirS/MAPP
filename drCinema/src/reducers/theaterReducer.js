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
    case 'GET_THEATER_BY_ID':
    return Object.assign({}, state, {
      theater: action.payload
    });
    default: return state;
  }
}

const theaterShit = combineReducers({
  getAllTheaters,
  getCinemaById,
})

export default theaterShit;
