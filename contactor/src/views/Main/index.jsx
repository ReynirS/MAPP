import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, FlatList, Image } from 'react-native';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import AddModal from '../../components/AddModal';
//import data from '../../resources/data.json';
import { filterContacts } from '../../services/contactService';
import { addContact, loadImportedContacts, getAllContacts } from '../../services/fileService';


class Main extends React.Component {

state = {
  search: '',
  allContacts: [],
  searchContacts: [],
  isAddModalOpen: false,
};

async componentDidMount() {
  await this.uploadContacts();
  await this._fetchItems();
}
async _fetchItems() {
  const loadedCon = await getAllContacts();
  const allContacts = loadedCon.sort((a, b) => (a.name > b.name) ? 1 : -1);
  const searchContacts = allContacts;
  this.setState({allContacts, searchContacts});
}

filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
};

async uploadContacts(){
  await loadImportedContacts();
}

updateSearch = search => {
  const data = this.state.allContacts;
  this.setState({ search });
  const searchContacts = data.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(search.toLowerCase())));
  this.setState({ searchContacts });
};


  render(){
    const { search, isAddModalOpen, allContacts, searchContacts } = this.state;
    return(
      <View style={{flex: 1}}>
      <Toolbar onAdd={ () => this.setState({ isAddModalOpen: true }) } />
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <ContactList
          contacts={searchContacts}
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
