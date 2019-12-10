import React from 'react';
import {View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import CinemaThumbnail from '../CinemaThumbnail';


const CinemaList = props => {
  if(props.theaters.length === 0){
    return(
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  else{
    /*const copy = props.theaters.theaters;
    const sortedCopy = copy.sort();*/
    return (
      <View>
        <FlatList
        numColumns={1}
        data={props.theaters.theaters.sort((a, b) => (a.name > b.name) ? 1 : -1)}
        renderItem={({item:{name, website, id}}) => {
          return (
            <CinemaThumbnail
              name={name}
              website={website}
              id={id}
              />
          );
        }}
        keyExtractor={ (theaters) => theaters.id.toString()} />
      </View>
    );
  }
}
const mapStateToProps = ({ theaters }) => ({ theaters });
export default connect(mapStateToProps)(CinemaList);
