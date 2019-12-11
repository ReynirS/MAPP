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
  console.log(movies.data);
  return movies.data;
}

export const gettingMoviesByCinemaID = async cinemaID => {
  const moveList = await gettingAllMovies();
  const validMovies = [];
  // iterate through all movies
  for (i = 0; i < moveList.length; i++) {
    // iterate through all showtimes of current movie
    for (j = 0; j < moveList[i]["showtimes"].length; j++) {
      // movies may have cineam id as object or number so we much check both
      if (moveList[i]["showtimes"][j]["cinema"]["id"] == cinemaID ||
          moveList[i]["showtimes"][j]["cinema"] == cinemaID) {

          // the required values for cineam details we must extract
          validMovie =  {
            cinemaID  : cinemaID,
            movieID   : moveList[i]["id"],
            title     : moveList[i]["title"],
            poster    : moveList[i]["poster"],
            year      : moveList[i]["year"],
            genres    : moveList[i]["genres"],
          }

        validMovies.push(validMovie);
      }
    }
  }
  return validMovies;
}