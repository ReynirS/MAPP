import React from 'react';
import {View, Text } from 'react-native';
import { connect } from 'react-redux';

const CinemaDetailView = props => {
  if(typeof props.theater.theater === 'undefined'){
    return(
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  else{
    let tmpDescription, phoneNumber;
    if(props.theater.theater.description === null){
      tmpDescription = "No description";
    }
    else{
      tmpDescription = props.theater.theater.description;
    }
    if(props.theater.theater.phone === null){
      phoneNumber = "No phonenumber";
    }
    else{
      phoneNumber = props.theater.theater.phone;
    }
    let fullAddress = props.theater.theater.address + ", " + props.theater.theater.city;
    return(
      <View>
        <Text>{props.theater.theater.name}</Text>
        <Text>{tmpDescription}</Text>
        <Text>{fullAddress}</Text>
        <Text>{phoneNumber}</Text>
        <Text>{props.theater.theater.website}</Text>
      </View>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    theater: reduxStoreState.theaters.getCinemaById
  };
}

export default connect(mapStateToProps)(CinemaDetailView);
