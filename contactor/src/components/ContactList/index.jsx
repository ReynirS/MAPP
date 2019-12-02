import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import ContactThumbnail from '../ContactThumbnail';

const ContactList = ({ contacts }) => (
  <View style={{flex: 1}}>
    <FlatList
    numColumns={1}
    data={contacts}
    renderItem={({item:{name, number, image}}) => {
      return (
        <ContactThumbnail
        name={name}
        number={number}
        image={image}
        />
      );
    }}
    keyExtractor={ (contact) => contact.name }/>
  </View>
);

export default ContactList;
