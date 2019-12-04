import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

const {width} = Dimensions.get('window')

const ContactDetails = ({contactName, contactNumber, contactImage}) => (
  <View style={styles.contact}>
    <Avatar
      containerStyle={styles.avatar}
      size={width*0.8}
      rounded
      source={{uri: contactImage}}
      onPress={() => console.log("You just clicked the Avatar")}
    />
    <Text style={styles.text}>{contactName}</Text>
    <Text style={styles.text}>{contactNumber}</Text>
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Call me?</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default ContactDetails;
