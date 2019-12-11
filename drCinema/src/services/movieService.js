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

//TO DO: FIX THIS FUNCTION
export const gettingMoviesByCinemaId = async (cinemaId) => {
  const movies = await gettingAllMovies();
  const moviesById = movies.map(movie => {
    var flag = false;
    if(typeof movie.showtimes !== 'undefined'){
      movies.showtimes.forEach(showtime => {
        if(showtime.cinema.id === cinemaId){
          flag = true;
        }
      });
    }
    if(flag){
      return movie;
    }
  });
  return moviesById;
}
