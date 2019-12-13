import { gettingTheaters, gettingCinemaById } from '../services/theaterService';

export const getTheaters = () => {
  return async dispatch => {
    try {
      const theaters = await gettingTheaters();
      dispatch(getTheatersSuccess(theaters));
    } catch(err) {
      console.log("ERRROR: SOMETHING FUCKED UP");
    }
  };
}

export const getCinemaById = id => {
  return async dispatch => {
    try{
      dispatch(loadingCinemaById(true));
      const theater = await gettingCinemaById(id);
      dispatch(getCinemaByIdSuccess(theater));
      dispatch(loadingCinemaById(false));
    } catch(err) {
      console.log("ERRROR: SOMETHING FUCKED UP");
    }
  };
}

const loadingCinemaById = flag => ({
  type: 'LOADING_CINEMA_BY_ID',
  payload: flag
});

const getCinemaByIdSuccess = theater => ({
  type: 'GET_THEATER_BY_ID',
  payload: theater
});

const getTheatersSuccess = theaters => ({
  type: 'GET_THEATERS',
  payload: theaters
});
