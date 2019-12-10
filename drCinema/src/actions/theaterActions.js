import { gettingTheaters } from '../services/theaterService';

export const getTheaters = () => {
  return async dispatch => {
    try {
      const theaters = await gettingTheaters();
      dispatch(getTheatersSuccess(theaters));
    } catch(err) {
      //Implement error action
    }
  };
}

const getTheatersSuccess = theaters => ({
  type: 'GET_THEATERS',
  payload: theaters
});
