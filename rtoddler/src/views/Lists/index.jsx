import React from 'react';
import { View, Text, FlatList} from 'react-native';
import {loadId, filterListsId} from '../../services/idServices';
import data from '../../resources/data.json';
import ListList from '../../components/ListList'
import ListToolbar from '../../components/ListToolbar';

class Lists extends React.Component {
  state = {
    currentId: '',
    currentList: [],
  }
  async componentDidMount(){
    const {navigation} = this.props;
    const currentId = await loadId(navigation.getParam('id', ''));
    const currentList = await filterListsId(currentId, data.lists);
    this.setState({currentId, currentList});
  }
  render(){
    if(this.state.currentId==''){
      return (
        <View>
          <Text>Something Went Wrong :/</Text>
        </View>
      )
    }
    else{
      return(
        <View style={{flex: 1, backgroundColor: '#615D6C'}}>
          <ListToolbar/>
          <ListList
            bid={this.state.currentId}
            data={this.state.currentList} />
        </View>
      );
    }
  }
}

export default Lists;
