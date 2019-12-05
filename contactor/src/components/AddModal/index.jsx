import React from 'react';
import { TouchableOpacity, Text, TextInput, Button } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
  state ={
    currentName: '',
    currentNumber: '',
  }
  updateCurrentName(currentName){
    this.setState({currentName});
  }
  updateCurrentNumber(currentNumber){
    this.setState({currentNumber});
  }
  clearValues(){
    this.setState({currentName: '', currentNumber: ''});
  }

  render() {
    const { isOpen, closeModal, addContact} = this.props;
    return (
      <Modal
      isOpen={isOpen}
      closeModal={closeModal}>
      <TextInput
      placeholder={"Name"}
      value={this.state.currentName}
      onChangeText={text => this.updateCurrentName(text)}
      />
      <TextInput
      placeholder={"Number"}
      value={this.state.currentNumber}
      onChangeText={text => this.updateCurrentNumber(text)}
      />
      <Button
      title={"Submit"}
      onPress={() => {
        addContact(this.state.currentName, this.state.currentNumber);
        this.clearValues();
      }}
      />
      </Modal>
    );
  }
}
export default AddModal;
