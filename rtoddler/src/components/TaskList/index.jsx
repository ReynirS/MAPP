import React from 'react';
import {View, Text, FlatList} from 'react-native';
import TaskThumbnail from '../TaskThumbnail';
const TaskList = ({lid, data}) => (
  <View>
    <FlatList
    numColumns={1}
    data={data}
    renderItem={({item:{id, name, description, isFinished, listId}}) =>{
      return (
        <View>
          <TaskThumbnail
          id={id}
          name={name}
          description={description}
          isFinished={isFinished}
          listId={listId}
          />
        </View>
      );
    }}
    keyExtractor={(task) => task.id.toString()} />
  </View>
);

export default TaskList
