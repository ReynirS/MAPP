import {gettingToken } from './tokenService';
const axios = require('axios');
const ENDPOINT = 'http://api.kvikmyndir.is/movies';

const gettingAllMovies = async () => {
  const token = await gettingToken();
  const movies = await axios.get(ENDPOINT, {
    headers: {
      'x-access-token': token,
    },
  })
  return movies.data;
}


export const gettingUpcomingMovies = async () => {
  const token = await gettingToken();
  const movies = await axios.get("http://api.kvikmyndir.is/upcoming", {
    headers: {
      'x-access-token': token,
    },
  })
  return movies.data;
}

export const gettingMovieByMovieId = async (movieId) => {
  const movies = await gettingAllMovies();
  const movie = movies.find(mov => mov.id == movieId);
  return movie;
}

export const gettingShowtimesByCinemaId = (movie, cinemaId) => {
  for(var i = 0; i < movie.showtimes.length; i++){
    if(movie.showtimes[i].cinema.id == cinemaId){
      return movie.showtimes[i].schedule;
    }
  }
}

export const gettingMoviesByCinemaId = async cinemaId => {
  const moveList = await gettingAllMovies();
  const validMovies = [];
  // iterate through all movies
  for (var i = 0; i < moveList.length; i++) {
    // iterate through all showtimes of current movie
    for (var j = 0; j < moveList[i]["showtimes"].length; j++) {
      // movies may have cineam id as object or number so we much check both
      if (moveList[i]["showtimes"][j]["cinema"]["id"] == cinemaId ||
          moveList[i]["showtimes"][j]["cinema"] == cinemaId) {

          // the required values for cineam details we must extract
          const validMovie =  {
            cinemaID  : cinemaId,
            movieID   : moveList[i]["id"],
            title     : moveList[i]["title"],
            poster    : moveList[i]["poster"],
            year      : moveList[i]["year"],
            genres    : moveList[i]["genres"],
          };
        validMovies.push(validMovie);
      }
    }
  }
  return validMovies;
}
