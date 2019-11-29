import React from 'react';
import { View, Flatlist, Text } from 'react-native';
//import PropTypes from 'prop-types';
import ListThumbnail from '../ListThumbnail';
import data from '../../resources/data.json';

const lists = data.lists;
const ListList = ({boardId}) => (
  <View style={{flex: 1}}>
    <Flatlist
    numColumns={3}
    data={lists}
    renderItem={ ({item: {id, name, color, boardId}})=>{
      return (
        <View>
          <Text>Dickdickssomanydicks</Text>
        </View>
        /*<ListThumbnail
        name={name} id={boardId}
        />*/
      );
    }}
    keyExtractor={(list) => list.id}
    />
  </View>
);

export default ListList;
