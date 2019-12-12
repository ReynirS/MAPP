import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MoviesByCinemaThumbnail from '../MoviesByCinemaThumbnail';
import styles from './style';

const MoviesByCinemaList = props => {
  if(props.movies.length === 0 || props.movies.movies === 'undefined'){
    return(
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  else{
    return(
      <View style={styles.view}>
        <FlatList
        numColumns={1}
        data={props.movies.moviesByCinemaId.sort((a, b) => (a.title > b.title) ? 1 : -1)}
        renderItem={({item:{title, poster, year, genres}}) => {
          return(
            <MoviesByCinemaThumbnail
              title={title}
              poster={poster}
              year={year}
              genres={genres}
              />
            // <Text>{title}</Text>
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
  };
}
export default connect(mapStateToProps)(MoviesByCinemaList);
