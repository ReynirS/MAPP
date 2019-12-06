import React from 'react';
import { TouchableOpacity, Text, TextInput, Button, Image } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
  state ={
    currentName: '',
    currentNumber: '',
    currentImageUri: '',
  }

  updateCurrentName(currentName){
    this.setState({currentName});
    this.setState({ submitOk: false });
    if(this.state.currentName.length > 0 && this.state.currentNumber.length > 6){
      this.setState({ submitOk: true })
    };
  }
  updateCurrentNumber(currentNumber){
    this.setState({currentNumber});
    this.setState({ submitOk: false });
    if(this.state.currentName.length > 0 && this.state.currentNumber.length > 6){
      this.setState({ submitOk: true })
    };
  }
  updateCurrentImageUri(currentImageUri){
    this.setState({currentImageUri});
  }
  clearValues(){
    this.setState({currentName: '', currentNumber: '', currentImageUri: ''});
  }
  render() {
    const { isOpen, closeModal, addContact, takePhoto, chooseFromCameraRoll, modalTitle} = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}>
        <Text style={styles.header}>{modalTitle}</Text>
        <TextInput
          placeholder={"Name"}
          placeholderTextColor='lightgray'
          value={this.state.currentName}
          onChangeText={text => this.updateCurrentName(text)}
          style={styles.nameInput}
        />
        <TextInput
          placeholder={"Number"}
          placeholderTextColor='lightgray'
          value={this.state.currentNumber}
          onChangeText={text => this.updateCurrentNumber(text)}
          keyboardType={'phone-pad'}
          style={styles.numberInput}
        />
        <TouchableOpacity
          onPress={async () => {
            const uri = await takePhoto();
            this.updateCurrentImageUri(uri);
          }}
          style={styles.button}
        >
          <Text>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const currentImageUri = await chooseFromCameraRoll();
            this.setState({currentImageUri});
          }}
          style={styles.button}
        >
          <Text>Choose from Camera!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={ !this.state.submitOk }
          onPress={async () => {
            await addContact(this.state.currentName, this.state.currentNumber, this.state.currentImageUri);
            this.clearValues();
          }}
          style={ !this.state.submitOk ? styles.buttonDisabled : styles.button } >
        <Text>Submit</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}
export default AddModal;
