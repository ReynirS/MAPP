import React from 'react';
import {View, Text, FlatList} from 'react-native';
import data from '../../resources/data.json';
import {loadId, filterTasksId} from '../../services/idServices';
import TaskList from '../../components/TaskList';

class Tasks extends React.Component {
    state= {
      currentId: '',
      currentList: [],
    }
    async componentDidMount(){
      const {navigation} = this.props;
      const currentId = await loadId(navigation.getParam('id', ''));
      const currentList = await filterTasksId(currentId, data.tasks);
      this.setState({currentId, currentList});
    }
    render(){
      if(this.state.currentId==''){
        return(
          <View>
            <Text>Missed it hun</Text>
          </View>
        );
      }
      else{
        return(
          <View>
            <TaskList lid={this.state.currentId} data={this.state.currentList}/>
          </View>
        );
      }
    }
}

export default Tasks;
