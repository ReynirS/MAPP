import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const ContactThumbnail = ({name, number, image, navigation: {navigate}, }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() =>navigate('Contact', {name, number, image})}>
    <View>
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
)

export default withNavigation(ContactThumbnail);
