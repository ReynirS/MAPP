import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const axios = require('axios');

const gettingToken = async () => {
  return axios.post('http://api.kvikmyndir.is/authenticate', {
    username: 'danielmar18',
    password: 'Skja9sia',
  }).then(res => {
    return res.data.token;
  });
}

var gettingMovies = async () => {
  const token = await gettingToken();
  const theaters = await axios.get('http://api.kvikmyndir.is/theaters', {
    headers: {
      'x-access-token': token,
    },
  });
  console.log(theaters.data.map(t => t.name));
  //console.log(movies);
  return theaters.data;
}

gettingMovies();

class Cinemas extends React.Component {

  render(){
    return(
      <View style={{ flex: 1} }>
        <StatusBar barStyle='light-content' />
        <Text style={{ fontSize: 30 }}>Cinemas</Text>
      </View>
    );
  }
}

export default Cinemas;
