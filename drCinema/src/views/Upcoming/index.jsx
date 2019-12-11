import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getMoviesByCinemaID } from '../../actions/movieActions';
import UpcomingList from '../../components/UpcomingList';

class Upcoming extends React.Component {

  getMoviesByCinemaID(){
    const { getMoviesByCinemaID } = this.props;
    getMoviesByCinemaID();
  }

  render(){
    this.getMoviesByCinemaID();
    return(
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <UpcomingList />
      </View>
    )
  }
}

export default connect(null, { getMoviesByCinemaID})(Upcoming);
