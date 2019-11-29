import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
// import data from '../../resources/data.json';
import styles from '../../styles/style';
//import {logo} from '../../resources/logo.png'

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../../resources/logo2.png')}
    />
    <Text style={styles.paragraph}>The most powerful board manipulation out there!</Text>
    <TouchableHighlight style={styles.button} onPress={() => navigate('Gallery')}>
      <Text style={styles.buttonText}>Boards</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
