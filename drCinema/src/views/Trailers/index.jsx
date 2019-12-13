import React from 'react';
import { View, StatusBar, WebView, Text } from 'react-native';
import { loadVariable } from '../../services/variableService';
import styles from './styles';

class Trailers extends React.Component {
  state = {
    trailers: [],
  }

  async componentDidMount(){
    const { navigation } = this.props;
    const trailers = await loadVariable(navigation.getParam('trailers', []));
    this.setState({ trailers });
  }

  render(){
    // We make two checks to accommodate for API inconsistencies
    if(this.state.trailers.length == 0 || this.state.trailers[0]["results"].length == 0) {
      return (<View><Text>No trailers</Text></View>);
    }
    else {
      const source = this.state.trailers[0]["results"][0]["url"];

      return(
        <View style={ styles.view }>
          <StatusBar barStyle='light-content' />
          <WebView
            source={ { uri: source } }
            style={ styles.webViewStyle }
          />
        </View>
      );
    }
  }
}

export default Trailers;
