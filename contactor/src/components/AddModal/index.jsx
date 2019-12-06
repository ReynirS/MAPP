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
    const { isOpen, closeModal, addContact, modalTitle} = this.props;
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
          keyboardType={'numeric'}
          style={styles.numberInput}
        />
        <Button
          title={"Submit"}
          onPress={() => {
            addContact(this.state.currentName, this.state.currentNumber);
            this.clearValues();
          }}
          style={styles.button}
        />
      </Modal>
    );
  }
}
export default AddModal;
