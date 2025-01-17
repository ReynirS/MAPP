import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import CinemaDetailView from '../../components/CinemaDetailView';
import { connect } from 'react-redux';
import { getCinemaById } from '../../actions/theaterActions';
import { getMoviesByCinemaId } from '../../actions/movieActions';
import { loadVariable } from '../../services/variableService';
import styles from './styles';
class CinemaDetail extends React.Component {
  state = {
    currentId: 0
  }

  async componentDidMount(){
    const { navigation, getCinemaById } = this.props;
    const currentId = await loadVariable(navigation.getParam('id', 0));
    this.setState({ currentId });
  }

  getCinemaById(id){
    const { getCinemaById } = this.props;
    if(!(id < 1)){
      getCinemaById(id);
    }
  }

  getMoviesByCinemaId(id){
    const { getMoviesByCinemaId } = this.props;
    if(!(id < 1)){
      getMoviesByCinemaId(id);
    }
  }

  render(){
    this.getCinemaById(this.state.currentId);
    this.getMoviesByCinemaId(this.state.currentId);
    return(
      <View style={ styles.view }>
        <StatusBar barStyle='light-content' />
        <CinemaDetailView />
      </View>
    );
  }
}


export default connect(null, {getCinemaById, getMoviesByCinemaId})(CinemaDetail);
