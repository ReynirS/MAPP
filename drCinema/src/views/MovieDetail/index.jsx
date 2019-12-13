import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import MovieDetailView from '../../components/MovieDetailView';
import { loadVariable } from '../../services/variableService';
import { getMovieByMovieId } from '../../actions/movieActions';
import { connect } from 'react-redux';
import styles from './styles';

class MovieDetail extends React.Component {
  state= {
    currentMovieId: 0
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const currentMovieId = await loadVariable(navigation.getParam('movieID', 0));
    this.setState({ currentMovieId });
    this.getMovieByMovieId(this.state.currentMovieId);
  }

  getMovieByMovieId(id){
    const { getMovieByMovieId } = this.props;
    if(!(id < 1)){
      getMovieByMovieId(id);
    }
  }

  render(){
    return(
      <View style={ styles.view }>
        <StatusBar barStyle='light-content' />
        <MovieDetailView />
      </View>
    );
  }
}


export default connect(null, { getMovieByMovieId })(MovieDetail);
