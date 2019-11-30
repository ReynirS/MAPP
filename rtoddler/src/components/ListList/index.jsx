import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ListThumbnail from '../ListThumbnail'

const ListList = ({bid, data}) =>(
  <View>
    <FlatList
      numColumns={2}
      data={data}
      renderItem={ ({item: { id, name, color, boardId} }) =>{
        return (
          <ListThumbnail
            id={id}
            name={name}
            color={color}
            boardId={boardId}
            />
        );
      }}
    keyExtractor={ (list) => list.id} />
    </View>
);

export default ListList;
