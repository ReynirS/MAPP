import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import styles from './styles';

const TaskToolbar = ({ onAdd, onRemove}) => (
  <View stylename="horizontal" style={styles.taskToolbar}>
    <TouchableHighlight style={styles.taskToolbarAction} onPress={onAdd}>
      <Text style={styles.taskToolbarActionText}> Add Task</Text>
    </TouchableHighlight>
    <TouchableHighlight
    style={styles.taskToolbarAction}
    onPress={onRemove}>
      <Text style={styles.taskToolbarActionText}>Remove</Text>
    </TouchableHighlight>
  </View>
);

export default TaskToolbar;
