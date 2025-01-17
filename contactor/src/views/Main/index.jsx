import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, FlatList, Image, StatusBar } from 'react-native';
import ContactList from '../../components/ContactList';
import Toolbar from '../../components/Toolbar';
import AddModal from '../../components/AddModal';
import { filterContacts } from '../../services/contactService';
import { addContact, loadImportedContacts, getAllContacts } from '../../services/fileService';
import {takePhoto, selectFromCameraRoll} from '../../services/imageService';
import styles from './styles';


class Main extends React.Component {

state = {
  search: '',
  allContacts: [],
  searchContacts: [],
  isAddModalOpen: false,
};

async componentDidMount() {
  await this._fetchItems();
}

async setModalToFalse(){
  this.setState({isAddModalOpen: false});
}

async _fetchItems() {
  const loadedCon = await getAllContacts();
  const allContacts = loadedCon.sort((a, b) => (a.name > b.name) ? 1 : -1);
  const searchContacts = allContacts;
  this.setState({allContacts, searchContacts});
}

refresh(){
  this._fetchItems();
}

filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
};

async uploadContacts(){
  await loadImportedContacts();
  const loadedCon = await getAllContacts();
  const allContacts = loadedCon.sort((a, b) => (a.name > b.name) ? 1 : -1);
  const searchContacts = allContacts;
  this.setState({allContacts, searchContacts});
}

async addContact(currentName, currentNumber, currentImageUri){
  if(currentImageUri === ''){
    currentImageUri = "No Image";
  }
  const retVal = {
    "name": currentName,
    "number": currentNumber,
    "image": currentImageUri,
  };
  await addContact(retVal);
  const allContacts = [ ...this.state.allContacts, retVal ];
  const searchContacts = [ ...this.state.searchContacts, retVal ];
  allContacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
  searchContacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
  this.setState({allContacts, searchContacts});
  this.setState({ isAddModalOpen: false});
}

async takePhoto(){
  const photo = await takePhoto();
  return photo;
}

async chooseFromCameraRoll(){
  const photo = await selectFromCameraRoll();
  return photo;
}

updateSearch = search =>{
  const data = this.state.allContacts;
  this.setState({ search });
  const searchContactsNames = data.filter(o => o.name.toLowerCase().includes(search.toLowerCase()));
  const searchContactsNumbers = data.filter(o => o.number.includes(search));
  const searchContactsConcat = [ ...searchContactsNames, ...searchContactsNumbers];
  const searchContacts = [ ...new Set(searchContactsConcat)];
  this.setState({ searchContacts });
};


  render(){
    const { search, allContacts, searchContacts } = this.state;
    return(
      <View style={styles.view}>
        <Toolbar
          onAdd={ () => this.setState({ isAddModalOpen: true }) }
          uploadContacts={() => this.uploadContacts()} />
        <StatusBar barStyle='light-content' />
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <ContactList
          contacts={searchContacts}
          refresh={() => this._fetchItems()}

        />
        <AddModal
          isOpen={ this.state.isAddModalOpen }
          closeModal={ () => this.setState({isAddModalOpen: false})}
          addContact={(currentName, currentNumber, currentImageUri) => this.addContact(currentName, currentNumber, currentImageUri)}
          takePhoto={() => this.takePhoto()}
          chooseFromCameraRoll={() => this.chooseFromCameraRoll()}
          modalTitle={ "Create New Contact"}
        />
      </View>
    );
  }
}

export default Main;
