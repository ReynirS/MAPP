import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { loadVariable } from '../../services/nameService';
import data from '../../resources/data.json';
import ContactDetails from '../../components/ContactDetails';
import AddModal from '../../components/AddModal';


class Contact extends React.Component{
  state =  {
    currentName: '',
    currentNumber: '',
    currentImage: '',
    isEditModalOpen: false
  }

  async editContact(currentName, currentNumber) {
    this.setState({ currentName: currentName });
    this.setState({ currentNumber: currentNumber });
    this.setState({ isEditModalOpen: false });

    //TODO delete old JSON, make new JSON
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const currentName = await loadVariable(navigation.getParam('name', ''));
    const currentNumber = await loadVariable(navigation.getParam('number', ''));
    const currentImage = await loadVariable(navigation.getParam('image', ''));
    this.setState({ currentName, currentNumber, currentImage });
  }

  render(){
    if((this.state.currentName == '') || (this.state.currentNumber == '')){
      return(
        <View>
          <Text>Something went wrong, no phonenumber or no name to display</Text>
        </View>
      );
    }
    else{
      return(
        <View style={{flex: 1, backgroundColor: '#615D6C' }}>
        <StatusBar barStyle='light-content' />
        <ContactDetails
          contactName={this.state.currentName}
          contactNumber={this.state.currentNumber}
          contactImage={this.state.currentImage}
          onEdit={ () => this.setState({ isEditModalOpen: true }) }
        />
        <AddModal
          isOpen={ this.state.isEditModalOpen }
          closeModal={ () => this.setState({isEditModalOpen: false})}
          addContact={ (currentName, currentNumber) => this.editContact(currentName, currentNumber) }
          modalTitle={ 'Edit Contact' }
        />
        </View>
      )
    }
  }
}

export default Contact;
