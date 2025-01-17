import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
// import data from '../../resources/data.json';
import styles from '../../styles/style';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>The most powerful board manipulation out there!</Text>
    <TouchableHighlight style={styles.button} onPress={() => navigate('Gallery')}>
      <Text style={styles.buttonText}>Boards</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
