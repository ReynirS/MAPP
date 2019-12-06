import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import Communications from 'react-native-communications';
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
      showEditButton={true}
      showEditButtonStyle={{width: 5, height: 5}}
      onEditPress={() => console.log("You just clicked the edit button!")}
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
