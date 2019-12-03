import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import data from '../../resources/data.json';


class Main extends React.Component {
  render(){
    return(

      <View style={{flex: 1}}>
      <Toolbar />
        <ContactList
        contacts={data.contacts}
        />
      </View>
    )
  }
}

export default Main;
