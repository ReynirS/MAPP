import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MoviesByCinemaThumbnail from '../MoviesByCinemaThumbnail';
import styles from './style';
import Spinner from '../Spinner';

const MoviesByCinemaList = props => {
  if(props.movies.length === 0 || props.movies.movies === 'undefined' || props.loading === true){
    return(
      <View style={styles.spinnerView}>
        <Spinner />
      </View>
    );
  }
  else{
    return(
      <View style={styles.view}>
        <FlatList
        numColumns={1}
        data={props.movies.moviesByCinemaId.sort((a, b) => (a.title > b.title) ? 1 : -1)}
        renderItem={({item:{title, poster, year, genres, movieID}}) => {
          return(
            <MoviesByCinemaThumbnail
              title={title}
              poster={poster}
              year={year}
              genres={genres}
              movieID={movieID}
              />
          );
        }}
        keyExtractor={ (movies) => movies.title } />
      </View>
    )
  }
}

const mapStateToProps = reduxStoreState => {
  return{
    movies: reduxStoreState.movies.getMoviesByCinemaID,
    loading: reduxStoreState.movies.loadingMoviesByCinemaId.loading
  };
}
export default connect(mapStateToProps)(MoviesByCinemaList);
