import { gettingUpcomingMovies } from '../services/movieService';

export const getUpcomingMovies = () => {
  return async dispatch => {
    try{
      const upcomingMovies = await gettingUpcomingMovies();
      dispatch(getUpcomingMoviesSuccess(upcomingMovies));
    } catch(err){
      console.log("ERROR MUTHAFUKKA" + err);
    }
  };
}

const getUpcomingMoviesSuccess = upcomingMovies => ({
  type: 'GET_UPCOMING_MOIVES',
  payload: upcomingMovies,
});
