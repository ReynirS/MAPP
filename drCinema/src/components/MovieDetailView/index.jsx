import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import MovieShowtimesInCinema from '../MovieShowtimesInCinema';
import styles from './style';

const MovieDetailView = props => {
  if(typeof props.movie.movieByMovieId === 'undefined'){
    return (
      <ScrollView>
        <Text>Loading</Text>
      </ScrollView>
    );
  }
  else{
    let genreString = props.movie.movieByMovieId.genres.map(m => m.Name + '\n').toString().split(',').join('');
    return(
      <ScrollView
        style={styles.view}
        scrollEnabled>
        <Image
        style={styles.image}
        source={{uri:props.movie.movieByMovieId.poster}}
        />
        <Text style={styles.title}>{props.movie.movieByMovieId.title}</Text>
        <Text style={styles.releaseYear}>Release year: {props.movie.movieByMovieId.year}</Text>
        <Text style={styles.plot}>{props.movie.movieByMovieId.plot}</Text>
        <Text style={styles.duration}>Duration: {props.movie.movieByMovieId.durationMinutes} minutes</Text>
        <Text style={styles.genres}>{'Genres:\n'}{genreString}</Text>
        <Text style={styles.showtimes}>{'Showtimes:\nTime (Room)\n'}</Text>
        <MovieShowtimesInCinema />
      </ScrollView>
    )
  }
}


const mapStateToProps = reduxStoreState => {
  return {
    movie: reduxStoreState.movies.getMovieByMovieId
  };
}

export default connect(mapStateToProps)(MovieDetailView);
