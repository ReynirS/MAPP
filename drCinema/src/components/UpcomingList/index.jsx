import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
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
          data={props.upcomingMovies.upcomingMovies.sort((a, b) => (a.name > b.name) ? 1 : -1)}
          renderItem={({item:{"title":title, "poster":poster, "release-dateIS": release}}) => {
            let date = new Date(release).toString();
            let dateArr = date.split(' ');
            let dateStr = 'Release date: ' + dateArr[2] + '. ' + dateArr[1] + ' ' + dateArr[3];
            return (
              <View>
                <Text>{title}</Text>
                <Image
                style={{height: 50, width: 50}}
                source={{uri:poster}}/>
                <Text>{dateStr}</Text>
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
