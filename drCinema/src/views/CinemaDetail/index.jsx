import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getCinemaById } from '../../actions/theaterActions';
import {getMoviesByCinemaID} from '../../actions/movieActions';
import { loadVariable } from '../../services/variableService';
import CinemaDetailView from '../../components/CinemaDetailView';

class CinemaDetail extends React.Component {
  state = {
    currentId: 0
  }

  async componentDidMount(){
    const {navigation, getCinemaById} = this.props;
    const currentId = await loadVariable(navigation.getParam('id', 0));
    this.setState({currentId});
  }

  getCinemaById(id){
    const {getCinemaById} = this.props;
    if(!(id < 1)){
      getCinemaById(id);
    }
  }

  getMoviesByCinemaId(id){
    const {getMoviesByCinemaId} = this.props;
    if(!(id < 1)){
      getMoviesByCinemaID(id);
    }
  }

  render(){
    this.getCinemaById(this.state.currentId);
    //EKKI SNERTA ÞESSI 2 FYRIR NEÐAN
  //  this.getMoviesByCinemaID(this.state.currentId);
    //console.log(this.props.movies);
    return(
      <View style={{ flex: 1} }>
        <StatusBar barStyle='light-content' />
        <CinemaDetailView />
      </View>
    );
  }
}

const mapStateToProps = reduxStoreState => {
  return {
    movies: reduxStoreState.movies.getMoviesByCinemaId
  };
}

export default connect(mapStateToProps, {getCinemaById, getMoviesByCinemaID})(CinemaDetail);
