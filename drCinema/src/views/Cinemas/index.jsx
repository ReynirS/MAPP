import React from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getTheaters } from '../../actions/theaterActions';
import CinemaList from '../../components/CinemaList';
import styles from './styles';

class Cinemas extends React.Component {

  getTheaters(){
    const { getTheaters } = this.props;
    getTheaters();
  }


  render(){
    this.getTheaters();
    return(
      <View style={ styles.view }>
        <StatusBar backgroundColor='blue' barStyle='light-content' />
        <CinemaList />
      </View>
    );
  }
}

export default connect(null, { getTheaters })(Cinemas);
