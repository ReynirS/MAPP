import React from 'react';
import { View, Text, FlatList } from 'react-native';
// import { loadName, fileterContactsName } from /../../services/nameServices';
import data from '../../resources/data.json';

class Contact extends React.Component{
  state =  {
    currentname: '',
  }
  // async componentDidMount(){
  //   const { navigation } = this.props;
  //   const currentname = await loadName(navigation.getParam('name', ''));
  //   this.setState({ currentname });
  // }

  render(){
    if(this.state.currentname === ''){
      return(
        <View>
          <Text>Something went wrong</Text>
        </View>
      );
    }
    else{
      return(
        <View style={{flex: 1, backgrounColor: '#615D6C' }}>
          <Text>currentname</Text>
        </View>
      )
    }
  }
}
