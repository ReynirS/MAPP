import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getUpcomingMovies } from '../../actions/upcomingActions';
import UpcomingList from '../../components/UpcomingList';
import styles from './styles';

class Upcoming extends React.Component {

  getUpcomingMovies(){
    const { getUpcomingMovies } = this.props;
    getUpcomingMovies();
  }

  render(){
    this.getUpcomingMovies();
    return(
      <View style={styles.view}>
        <StatusBar barStyle='light-content' />
        <UpcomingList />
      </View>
    )
  }
}

export default connect(null, { getUpcomingMovies})(Upcoming);
