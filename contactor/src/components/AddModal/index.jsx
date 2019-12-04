import React from 'react';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
  render() {
    const { isOpen, closeModal } = this.props;
    return (
      <Modal
        isOpen={ isOpen }
        closeModal={ closeModal }
      >
        <Text>Hello world</Text>
        <TextInput placeholder="Enter some text here I guess"/>
      </Modal>
    );
  }
}
export default AddModal;
