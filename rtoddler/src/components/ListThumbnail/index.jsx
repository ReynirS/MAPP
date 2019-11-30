import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

const ListThumbnail = ({id, name, color, boardId, navigation: {navigate}}) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.icon} onPress={() => navigate('Tasks', {id:id})}>
    <View>
      <Text style={styles.text}>{name}</Text>
      <Image style={[styles.image, {backgroundColor:color}]}/>
    </View>
  </TouchableOpacity>
);

export default withNavigation(ListThumbnail);
