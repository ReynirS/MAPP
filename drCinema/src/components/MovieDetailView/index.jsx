import React from 'react';
import {View, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import MovieShowtimesInCinema from '../MovieShowtimesInCinema';

const MovieDetailView = props => {
  if(typeof props.movie.movieByMovieId === 'undefined'){
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  else{
    let genreString = props.movie.movieByMovieId.genres.map(m => m.Name + '\n').toString().split(',').join('');
    return(
      <View>
        <Image
        style={{height: 100, width: 100}}
        source={{uri:props.movie.movieByMovieId.poster}}
        />
        <Text>Title: {props.movie.movieByMovieId.title}</Text>
        <Text>Release year: {props.movie.movieByMovieId.year}</Text>
        <Text>Plot: {props.movie.movieByMovieId.plot}</Text>
        <Text>Duration: {props.movie.movieByMovieId.durationMinutes} minutes</Text>
        <Text>Genres: {genreString}</Text>
        <MovieShowtimesInCinema />
      </View>
    )
  }
}


const mapStateToProps = reduxStoreState => {
  return {
    movie: reduxStoreState.movies.getMovieByMovieId
  };
}

export default connect(mapStateToProps)(MovieDetailView);
