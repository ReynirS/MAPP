const axios = require('axios');

export const gettingToken = async () => {
  return axios.post('http://api.kvikmyndir.is/authenticate', {
    username: 'danielmar18',
    password: 'Skja9sia',
  }).then(res => {
    return res.data.token;
  });
}
