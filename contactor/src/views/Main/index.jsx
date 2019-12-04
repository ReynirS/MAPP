import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, FlatList, Image } from 'react-native';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';
import { loadContacts } from '../../services/contactService';


class Main extends React.Component {

state = {
  search: '',
  displayContacts: data.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1),
  isAddModalOpen: false,
};

filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
};

async getContacts(){
  await loadContacts();
}

updateSearch = search => {
  this.setState({ search });
  const displayContactsNames = data.contacts.filter(o => o.name.toLowerCase().includes(search.toLowerCase()));
  const displayContactsNumbers = data.contacts.filter(o => o.number.toLowerCase().includes(search.toLowerCase()));
  const displayContacts = [ ...displayContactsNames, ...displayContactsNumbers];
  this.setState({ displayContacts });
};


  render(){
    const { search, displayContacts, isAddModalOpen } = this.state;
    this.getContacts();
    return(
      <View style={{flex: 1}}>
      <Toolbar onAdd={ () => this.setState({ isAddModalOpen: true }) } />
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <ContactList
          contacts={displayContacts}
        />
        <AddModal
          isOpen={ isAddModalOpen }
          closeModal={() => this.setState({ isAddModalOpen: false})}
        />
      </View>
    );
  }
}

export default Main;
