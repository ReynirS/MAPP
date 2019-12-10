import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getTheaters } from '../../actions/theaterActions';
import CinemaList from '../../components/CinemaList';

class Cinemas extends React.Component {

  getTheaters(){
    const {getTheaters} = this.props;
    getTheaters();
  }


  render(){
    this.getTheaters();
    return(
      <View style={{ flex: 1} }>
        <StatusBar barStyle='light-content' />
        <CinemaList />
      </View>
    );
  }
}

export default connect(null, {getTheaters})(Cinemas);
