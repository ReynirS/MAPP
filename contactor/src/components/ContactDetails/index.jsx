import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import Communications from 'react-native-communications';
import styles from './styles';

const {width} = Dimensions.get('window')

const ContactDetails = ({contactName, contactNumber, contactImage, onEdit}) => (
  <View style={styles.contact}>
    <Avatar
      containerStyle={styles.avatar}
      size={width*0.8}
      rounded
      source={{uri: contactImage}}
      showEditButton={true}
      editButton={{size: 40}}
      onEditPress={ onEdit }
    />
    <Text style={styles.text}>{contactName}</Text>
    <Text style={[styles.text, styles.lowerText]}>{contactNumber}</Text>
    <TouchableOpacity onPress={() => Communications.phonecall(contactNumber, true)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Call me?</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default ContactDetails;
