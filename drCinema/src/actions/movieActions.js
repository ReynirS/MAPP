import { gettingMoviesByCinemaId, gettingMovieByMovieId } from '../services/movieService';

export const getMoviesByCinemaId = cinemaId => {
  return async dispatch => {
    try{
      dispatch(loadingMoviesByCinemaId(true));
      const movies = await gettingMoviesByCinemaId(cinemaId);
      dispatch(getMoviesByCinemaIdSuccess(movies));
      dispatch(loadingMoviesByCinemaId(false));
    } catch(err){
      console.log("ERROR IN GETMOVIESBYCINEMAID() IN MOVIEACTIONS " + err);
    }
  };
}

export const getMovieByMovieId = movieId => {
  return async dispatch => {
    try{
      dispatch(loadingMovieByMovieId(true));
      const movie = await gettingMovieByMovieId(movieId);
      dispatch(getMovieByMovieIdSuccess(movie));
      dispatch(loadingMovieByMovieId(false));
    } catch(err){
      console.log("ERROR IN GETMOVIEBYMOVIEID() IN MOVIEACTIONS"+ err);
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

const loadingMoviesByCinemaId = flag => ({
  type: 'LOADING_MOVIES_BY_CINEMA_ID',
  payload: flag
});

const loadingMovieByMovieId = flag => ({
  type: 'LOADING_MOVIE_BY_MOVIE_ID',
  payload: flag
});
