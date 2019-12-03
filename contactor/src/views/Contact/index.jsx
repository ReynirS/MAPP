import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { loadName } from '../../services/nameService';
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
    const currentName = await loadName(navigation.getParam('name', ''));
    // const currentNumber = await loadNumber(navigation.getParam('number', ''));
    // const currentImage = await loadImage(navigation.getParam('image', ''));
    this.setState({ currentName });
  }

  render(){
    if(this.state.currentName === ''){
      return(
        <View>
          <Text>Something went wrong</Text>
        </View>
      );
    }
    else{
      return(
        <View style={{flex: 1, backgroundColor: '#615D6C' }}>
          // <ContactToolbar />
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
