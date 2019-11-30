import React from 'react';
import {View, TouchableHighlight, Text } from 'react-native';
import styles from './styles';

const ListToolbar = ({ onAdd, onRemove}) => (
  <View styleName="horizontal" style={styles.listToolbar}>
  <TouchableHighlight style={styles.listToolbarAction} onPress={onAdd}>
    <Text style={styles.listToolbarActionText}>Add List</Text>
  </TouchableHighlight>
  <TouchableHighlight
  style={styles.listToolbarAction}
  onPress={onRemove}>
    <Text style={styles.listToolbarActionText}>Remove</Text>
  </TouchableHighlight>
  </View>
);

export default ListToolbar;
