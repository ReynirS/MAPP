import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import ContactList from '../../components/ContactList'
import data from '../../resources/data.json';

class Main extends React.Component {
  render(){
    return(
      <ContactList
      contacts={data.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1)}
      />
    )
  }
}

export default Main;
