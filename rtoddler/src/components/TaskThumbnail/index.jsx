import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const TaskThumbnail = ({id, name, description, isFinished, listId}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
  {
    isFinished
    ?
    <AntDesign name="checkcircleo" style={ styles.checkmark} />
    :
    <></>
  }
    <View style={{opacity: isFinished ? 0.5 : 1}}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
);

export default TaskThumbnail;
