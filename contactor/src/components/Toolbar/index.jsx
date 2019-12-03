import React from 'react';
import {View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import styles from './styles.js';


const Toolbar = ({onAdd, onRemove}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableOpacity>
      <Image
      style={styles.addIcon}
      source={require('../../resources/noun_Plus_2875.png')}
      onPress={console.log('hey')}
      />
    </TouchableOpacity>
    <Text style={styles.toolbarText}>Contact List</Text>
  </View>
);

export default Toolbar;
