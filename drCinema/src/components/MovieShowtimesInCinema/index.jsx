import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { gettingShowtimesByCinemaId } from '../../services/movieService';

const MovieShowtimesInCinema = props => {

  const showtimes = gettingShowtimesByCinemaId(props.movie.movieByMovieId, props.theaterId);

  return(
    <View>
      <FlatList
        numColumns={1}
        data={showtimes}
        renderItem={({item:{purchase_url, time}}) => {
          return(
            <View>
              <Text>{purchase_url}</Text>
              <Text>{time}</Text>
            </View>
          );
        }}
        keyExtractor= {(showtime) => showtime.purchase_url } />
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
