import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import UpcomingThumbnail from '../UpcomingThumbnail';
import styles from './styles';
import Spinner from '../Spinner';

const UpcomingList = props => {
  if(props.upcomingMovies.length === 0 || typeof props.upcomingMovies.upcomingMovies === 'undefined'){
    return (
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
          // sort movies by release date
          data={props.upcomingMovies.upcomingMovies.sort((a, b) => (a["release-dateIS"] > b["release-dateIS"]) ? 1 : -1)}
          renderItem={({item:{"title":title, "poster":poster, "release-dateIS": release, "trailers": trailers}}) => {

            let date = new Date(release).toString();
            let dateArr = date.split(' ');
            let dateStr = 'Release date: ' + dateArr[2] + '. ' + dateArr[1] + ' ' + dateArr[3];
            return (
              <UpcomingThumbnail
                title={title}
                poster={poster}
                dateStr={dateStr}
                trailers={trailers}
              />
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
