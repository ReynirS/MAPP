import { gettingMoviesByCinemaId } from '../services/movieService';

export const getMoviesByCinemaId = cinemaId => {
  return async dispatch => {
    try{
      const movies = await gettingMoviesByCinemaId(cinemaId);
      dispatch(getMoviesByCinemaIdSuccess(movies));
    } catch(err){
      console.log("ERRROR BITCH" + err);
    }
  };
}

const getMoviesByCinemaIdSuccess = movies => ({
  type: 'GET_MOVIES_BY_CINEMA_ID',
  payload: movies
});
