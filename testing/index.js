const axios = require('axios');
const gettingToken = async () => {
  return axios.post('http://api.kvikmyndir.is/authenticate', {
	"username": "danielmar18",
	"password": "Skja9sia",
  })
  .then(res => {
    this.res = res.data.token;
    return this.res;
  });
}

var gettingMovies = async () => {
  gettingToken()
  .then(token => {
      return axios.get('http://api.kvikmyndir.is/movies', {
      params: {
        "token": token
      }
    }).then(res => {
      console.log(res.data);
    })
  });
}

gettingMovies();
