import React from 'react';
import {View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import styles from './styles.js';


const Toolbar = ({onAdd}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <TouchableOpacity onPress={() => {}} style={styles.importContacts}>
      <Text style={styles.importText}>Import Contacts</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={ onAdd } style={styles.addIcon}>
      <Image
      style={styles.image}
      source={require('../../resources/noun_Plus_2875.png')}
      />
    </TouchableOpacity>
    <Text style={styles.toolbarText}>Contact List</Text>
  </View>
);

export default Toolbar;
