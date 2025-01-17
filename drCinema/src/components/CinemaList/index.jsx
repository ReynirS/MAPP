import React from 'react';
import {View, FlatList } from 'react-native';
import CinemaThumbnail from '../CinemaThumbnail';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import styles from './styles';


const CinemaList = props => {
  if(props.theaters.length === 0 ||typeof props.theaters.theaters === 'undefined'){
    return(
      <View style={ styles.spinnerView }>
        <Spinner />
      </View>
    );
  }
  else{

    return (
      <View style={ styles.view }>
        <FlatList
        numColumns={ 1 }
        data={props.theaters.theaters.sort((a, b) => (a.name > b.name) ? 1 : -1)}
        renderItem={ ({item:{name, website, id}}) => {
          return (
            <CinemaThumbnail
              name={ name }
              website={ website }
              id={ id }
              />
          );
        }}
        keyExtractor={ (theaters) => theaters.id.toString() } />
      </View>
    );
  }
}
const mapStateToProps = reduxStoreState => {
  return {
      theaters: reduxStoreState.theaters.getAllTheaters,
  };
}
export default connect(mapStateToProps)(CinemaList);
