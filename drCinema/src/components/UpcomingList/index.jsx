import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import UpcomingThumbnail from '../UpcomingThumbnail';
import styles from './styles';

const UpcomingList = props => {
  if(props.upcomingMovies.length === 0 || typeof props.upcomingMovies.upcomingMovies === 'undefined'){
    return (
      <View>
        <Text>Loading upcoming movies</Text>
      </View>
    );
  }
  else{
    console.log(props.upcomingMovies.upcomingMovies);
    return(
      <View>
        <FlatList
          numColumns={1}
          data={props.upcomingMovies.upcomingMovies}
          renderItem={({item:{title}}) => {
            return (
              <View>
                <Text>{title}</Text>
                </View>
              );
          }}
          keyExtractor={(movies) => movies.title} />
        </View>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    upcomingMovies: reduxStoreState.upcomingMovies.getUpcomingMovies
  };
}

export default connect(mapStateToProps)(UpcomingList);
