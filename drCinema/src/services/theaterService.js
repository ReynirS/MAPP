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
  //console.log(theaters.data.map(t => t.name));
  //console.log(movies);
  return theaters.data;
}
