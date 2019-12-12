import { gettingMoviesByCinemaId, gettingMovieByMovieId } from '../services/movieService';

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

export const getMovieByMovieId = movieId => {
  return async dispatch => {
    try{
      const movie = await gettingMovieByMovieId(movieId);
      dispatch(getMovieByMovieIdSuccess(movie));
    } catch(err){
      console.log("Error gettin movie by movie id: "+ err);
    }
  };
}

const getMoviesByCinemaIdSuccess = movies => ({
  type: 'GET_MOVIES_BY_CINEMA_ID',
  payload: movies
});

const getMovieByMovieIdSuccess = movie => ({
  type: 'GET_MOVIE_BY_MOVIE_ID',
  payload: movie
});
