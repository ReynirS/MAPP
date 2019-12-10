import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ListItem } from 'react-native-elements';

const CinemaThumbnail = ({ name, website, id }) => (
  <TouchableOpacity
    activeOpacity={0.8}>
    <View>
      <ListItem
        containerStyle={{backgroundColor: 'white'}}
        title={name}
        subtitle={website}
        bottomDivider={true}
        />
    </View>
  </TouchableOpacity>

)

export default CinemaThumbnail;
