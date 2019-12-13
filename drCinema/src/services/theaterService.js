import { gettingToken } from './tokenService';
const axios = require('axios');
const ENDPOINT = 'http://api.kvikmyndir.is/theaters';

export const gettingTheaters = async () => {
  const token = await gettingToken();
  const theaters = await axios.get(ENDPOINT, {
    headers: {
      'x-access-token': token,
    },
  });
  return theaters.data;
}

export const gettingCinemaById = async (id) =>{
  const theaters = await gettingTheaters();
  const theater = theaters.find(cinema => cinema.id == id);
  return theater;
}
