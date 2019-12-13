import React from 'react';
import { ScrollView, Text, Linking } from 'react-native';
import { connect } from 'react-redux';
import MoviesByCinemaList from '../MoviesByCinemaList';
import styles from './styles';
import Spinner from '../Spinner';

const CinemaDetailView = props => {
  if(typeof props.theater.theater === 'undefined' || props.loading === true){
    return(
      <ScrollView style={styles.spinnerView}>
        <Spinner />
      </ScrollView>
    );
  }
  else{
    let tmpDescription, phoneNumber;
    if(props.theater.theater.description === null){
      tmpDescription = "No description";
    }
    else{
      tmpDescription = props.theater.theater.description.replace(/<[a-z]*>/g, '');
    }
    if(props.theater.theater.phone === null){
      phoneNumber = "No phonenumber";
    }
    else{
      phoneNumber = props.theater.theater.phone;
    }
    let fullAddress = props.theater.theater["address\t"] + ", " + props.theater.theater.city;
    let website = 'http://' + props.theater.theater.website.toString();
    return(
      <ScrollView style={styles.view}
        scrollEnabled={true}>
        <Text style={styles.name}>{props.theater.theater.name}</Text>
        <Text style={styles.description}>{tmpDescription}</Text>
        <Text style={styles.address}>{fullAddress}</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        <Text style={styles.website} onPress={() => {
          Linking.openURL(website);
        }}>{props.theater.theater.website}</Text>
        <MoviesByCinemaList />
      </ScrollView>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    theater: reduxStoreState.theaters.getCinemaById,
    loading: reduxStoreState.theaters.cinemaIsLoading.loading
  };
}

export default connect(mapStateToProps)(CinemaDetailView);
