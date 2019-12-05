import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, FlatList, Image, Button } from 'react-native';
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
  inputName: '',
  inputNumber: '',
};

filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
};

//TODO add parameter
//Maybe jus use state values
async updateContacts(inputName, inputNumber){

  //console.log('this.state.inputName = ' + this.state.inputName);
  console.log('inputName = ' + inputName);
  console.log('this.state.inputNumber = ' + this.state.inputNumber);
  console.log('inputNumber = ' + inputNumber);

  const newContact = {
    "name"    : "Sæmundur 2 The Wild Boogaloo",
    "number"  : "6666420",
    "image"   : "https://images.unsplash.com/photo-1570078070569-59167c37507c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
   };

  const displayContacts = [ ...this.state.displayContacts, newContact ];
  this.setState({ displayContacts });
  this.setState({ isAddModalOpen: false});
};

async getContacts(){
  await loadContacts();
}

updateSearch = search => {
  this.setState({ search });
  const displayContactsNames = data.contacts.filter(o => o.name.toLowerCase().includes(search.toLowerCase()));
  const displayContactsNumbers = data.contacts.filter(o => o.number.toLowerCase().includes(search.toLowerCase()));
  const displayContactsConcat = [ ...displayContactsNames, ...displayContactsNumbers];
  const displayContacts = [ ...new Set(displayContactsConcat)];
  this.setState({ displayContacts });
};


  render(){
    const { search, displayContacts, isAddModalOpen, inputName, inputNumber} = this.state;
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
          updateContacts={ (inputName, inputNumber) => this.updateContacts(inputName, inputNumber) }
        />
      </View>
    );
  }
}

export default Main;
