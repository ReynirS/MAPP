import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import ContactThumbnail from '../ContactThumbnail';
import { ListItem } from 'react-native-elements';
import styles from './styles';

const ContactList = ({ contacts, refresh }) => (
  <View style={styles.view}>
    <FlatList
    numColumns={1}
    data={contacts}
    renderItem={({item:{name, number, image}}) => {
      return (
        <ContactThumbnail
        name={name}
        number={number}
        image={image}
        refresh={refresh}
        />
      );
    }}
    keyExtractor={ (contact) => contact.name }/>
  </View>
);

export default ContactList;
