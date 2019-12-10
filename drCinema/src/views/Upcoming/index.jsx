import React from 'react';
import { View, Text, StatusBar } from 'react-native';

class Upcoming extends React.Component {

  render(){
    return(
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <Text style={{ fontSize: 30 }}>Upcoming</Text>
      </View>
    )
  }
}

export default Upcoming;
