import React from 'react';
import { TouchableOpacity, Text, TextInput, Button, Alert } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
  render() {
    const { isOpen, closeModal, inputName, inputNumber, updateContacts } = this.props;
    return (
      <Modal
        isOpen={ isOpen }
        closeModal={ closeModal }
        updateContacts={ updateContacts }>
        <TextInput
          style={styles.bigText}
          placeholder="Name"
          //value={inputName}
          //onChangeText={(inputName) => this.setState({inputName})}
          />
        <TextInput
          style={styles.bigText}
          placeholder="Phone"
          //value={inputNumber}
          //onChangeText={(inputNumber) => this.setState({inputNumber})}
          />

        <Button
          title="Submit"
          onPress={ updateContacts(inputName, inputNumber) }
          //TODO onPress updateContacts(inputName, inputNumber)
        />
      </Modal>
    );
  }
}
export default AddModal;
