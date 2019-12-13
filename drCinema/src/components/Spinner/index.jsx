import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles.js';

const Spinner = () => (
  <View style={ styles.spinner }>
    <ActivityIndicator color='grey' />
  </View>
);

export default Spinner;
