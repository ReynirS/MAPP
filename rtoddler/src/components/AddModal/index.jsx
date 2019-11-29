import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity, Text, TextInput, TouchableHighlight } from 'react-native';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', description: '', thumbnailPhoto: ''};
  }
  render(){
    const { isOpen, closeModal, takePhoto, selectFromCameraRoll } = this.props;
    return (
      <Modal
        isOpen={ isOpen }
        closeModal={ closeModal }>
        <Text>Create a new board!</Text>
        <Text>Name:</Text>
        <TextInput
          style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1}}
          placeholder="Name:"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text>Description (optional):</Text>
        <TextInput
          style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1}}
          placeholder="Description (optional):"
          onChangeText={(description) => this.setState({description})}
          value={this.state.description}
        />
        <Text>Image URL:</Text>
        <TextInput
          style={{height: 20, width: 100, borderColor: 'gray', borderWidth: 1}}
          placeholder="Image URL:"
          onChangeText={(thumbnailPhoto) => this.setState({thumbnailPhoto})}
          value={this.state.thumbnailPhoto}
        />
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableHighlight>
      </Modal>
    );
  }
}
export default AddModal;
