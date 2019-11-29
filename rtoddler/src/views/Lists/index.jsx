import React from 'react';
import { View, Text} from 'react-native';
import {loadId} from '../../services/idServices';
import data from '../../resources/data.json';
import ListList from '../../components/ListList';

class Lists extends React.Component {
  state = {
    currentId: '',
  }
  async componentDidMount(){
    const {navigation} = this.props;
    const currentId = await loadId(navigation.getParam('id', ''));
    this.setState({currentId});
  }
  render(){
    if(this.state.currentId==''){
      return (
        <View>
          <Text>Fokkk</Text>
        </View>
      )
    }
    else{
      return(
        <View>
        <ListList boardId={this.state.currentId} />
        </View>
      );
    }
  }
}

export default Lists;
