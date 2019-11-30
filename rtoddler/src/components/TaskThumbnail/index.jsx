import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const TaskThumbnail = ({id, name, description, isFinished, listId}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
    <View>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
);

export default TaskThumbnail;
