import React from 'react';
import {View, Text, Image } from 'react-native';

const ContactDetails = ({contactName, contactNumber, contactImage}) => (
  <View>
    <Text>{contactName}</Text>
    <Text>{contactNumber}</Text>
    <Image
      style={{height: 50, width: 50}}
      source={{uri: contactImage}}
      />
  </View>
);

export default ContactDetails;
