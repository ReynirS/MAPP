import React from 'react';
import { View, Text, FlatList, Linking } from 'react-native';
import { connect } from 'react-redux';
import { gettingShowtimesByCinemaId } from '../../services/movieService';
import styles from './style';

const MovieShowtimesInCinema = props => {

  const showtimes = gettingShowtimesByCinemaId(props.movie.movieByMovieId, props.theaterId);

  return(
    <View style={ styles.view }>
      <FlatList
        numColumns={ 1 }
        data={ showtimes }
        renderItem={ ({item:{purchase_url, time}}) => {
          return(
            <View>
              <Text style={ styles.time }>{ time }</Text>
              <Text
              style={ styles.purchaseURL }
              onPress={ () => {
                Linking.openURL(purchase_url);
              } }>{ purchase_url }</Text>
            </View>
          );
        } }
        keyExtractor= { (showtime) => showtime.purchase_url } />
    </View>
  );
}

const mapStateToProps = reduxStoreState => {
  return {
    movie: reduxStoreState.movies.getMovieByMovieId,
    theaterId: reduxStoreState.theaters.getCinemaById.theater.id
  };
}

export default connect(mapStateToProps)(MovieShowtimesInCinema);
