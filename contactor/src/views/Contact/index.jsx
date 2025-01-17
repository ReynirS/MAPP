import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import { loadVariable } from '../../services/nameService';
import { addContact, removeContact } from '../../services/fileService';
import { takePhoto, selectFromCameraRoll } from '../../services/imageService';
import styles  from './styles';
import ContactDetails from '../../components/ContactDetails';
import AddModal from '../../components/AddModal';


class Contact extends React.Component{
  state =  {
    currentName: '',
    currentNumber: '',
    currentImage: '',
    isEditModalOpen: false
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const currentName = await loadVariable(navigation.getParam('name', ''));
    const currentNumber = await loadVariable(navigation.getParam('number', ''));
    const currentImage = await loadVariable(navigation.getParam('image', ''));
    this.setState({ currentName, currentNumber, currentImage });
  }

  async takePhoto(){
    const photo = takePhoto();
    return photo;
  }

  async chooseFromCameraRoll(){
    const photo = await selectFromCameraRoll();
    return photo;
  }

  async editContact(currentName, currentNumber, currentImageUri) {
    const oldContact = {
      "name": this.state.currentName,
      "number": this.state.currentNumber,
      "image": this.state.currentImage
    }
    this.setState({ currentName: currentName });
    this.setState({ currentNumber: currentNumber });
    this.setState({ currentImage: currentImageUri});
    this.setState({ isEditModalOpen: false });
    const retVal = {
      "name": currentName,
      "number": currentNumber,
      "image": currentImageUri
    };
    addContact(retVal);
    removeContact(oldContact);
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
        <View style={styles.view}>
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
          addContact={ (currentName, currentNumber, currentImageUri) =>{
            this.editContact(currentName, currentNumber, currentImageUri);
            this.props.navigation.state.params.refresh();
           }}
          takePhoto={ () => this.takePhoto()}
          chooseFromCameraRoll={ () => this.chooseFromCameraRoll()}
          modalTitle={ 'Edit Contact' }
        />
        </View>
      )
    }
  }
}

export default Contact;
