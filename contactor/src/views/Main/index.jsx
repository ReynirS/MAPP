import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, FlatList, Image } from 'react-native';
import ContactList from '../../components/ContactList'
import data from '../../resources/data.json';

class Main extends React.Component {

state = {
  search: '',
  displayContacts: data.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1),
};

filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
};

updateSearch = search => {
  this.setState({ search });
  const displayContacts = data.contacts.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(search.toLowerCase())));
  this.setState({ displayContacts });
};

  render(){
    const { search, displayContacts } = this.state;
    return(
      <View style={{flex: 1}}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <ContactList
          contacts={displayContacts}
        />
      </View>
    );
  }
}

export default Main;
