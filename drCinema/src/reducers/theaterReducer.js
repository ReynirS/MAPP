export default function(state = [], action){
  switch(action.type){
    case 'GET_THEATERS': return Object.assign({}, state, {
      theaters: action.payload
    });
    default: return state;
  }
}
