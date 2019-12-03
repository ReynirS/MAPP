import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { loadVariable } from '../../services/nameService';
import data from '../../resources/data.json';
import ContactDetails from '../../components/ContactDetails';

class Contact extends React.Component{
  state =  {
    currentName: '',
    currentNumber: '',
    currentImage: ''
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
          <Text>Something went wrong</Text>
        </View>
      );
    }
    else{
      return(
        <View style={{flex: 1, backgroundColor: '#615D6C' }}>
        <ContactDetails
        contactName={this.state.currentName}
        contactNumber={this.state.currentNumber}
        contactImage={this.state.currentImage}
        />
        </View>
      )
    }
  }
}

export default Contact;
