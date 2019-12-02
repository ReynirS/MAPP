import React from 'react';
import {View, Text, Image} from 'react-native';

const ContactThumbnail = ({name, number, image}) => (
  <View>
    <Text>{name}</Text>
    <Text>{number}</Text>
    <Image
    style={{height:50, width:50}}
    source={{uri: image}}
    />
  </View>
)

export default ContactThumbnail;
