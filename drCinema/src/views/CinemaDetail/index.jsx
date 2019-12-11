import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getCinemaById } from '../../actions/theaterActions';
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

  render(){
    this.getCinemaById(this.state.currentId);
    return(
      <View style={{ flex: 1} }>
        <StatusBar barStyle='light-content' />
        <CinemaDetailView />
      </View>
    );
  }
}

export default connect(null, {getCinemaById})(CinemaDetail);
