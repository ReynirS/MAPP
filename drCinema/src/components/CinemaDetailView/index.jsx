import React from 'react';
import {View, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

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
    let website = 'http://' + props.theater.theater.website.toString();
    return(
      <View>
        <Text style={styles.name}>{props.theater.theater.name}</Text>
        <Text style={styles.description}>{tmpDescription}</Text>
        <Text style={styles.address}>{fullAddress}</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        <Text style={styles.website} onPress={() => {
          Linking.openURL(website);
        }}>{props.theater.theater.website}</Text>
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
