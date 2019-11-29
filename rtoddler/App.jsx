import React from 'react';
import {View, Text} from 'react-native';
// import Main from './src/views/Main';
// import Gallery from './src/views/Gallery';
import AppContainter from './src/routes';
import * as Font from 'expo-font';




export default class App extends React.Component{
  state = {
    fontsLoaded: false
  }
  async componentDidMount(){
    await Font.loadAsync({
      moon_regular: require('./assets/fonts/Moon2.0-Regular.ttf'),
      opensans_regular: require('./assets/fonts/OpenSans-Regular.ttf'),
      opensans_semibold: require('./assets/fonts/OpenSans-Semibold.ttf'),
      opensans_bold: require('./assets/fonts/OpenSans-Bold.ttf'),
      opensans_xbold: require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    });
    this.setState({fontsLoaded: true});
  }
  render(){
    if(this.state.fontsLoaded){
    return (
      <AppContainter />
    // <Main />
    // <Gallery />
    );
  }
  else{
    return(
    <View>
      <Text>Hold on</Text>
    </View>
  )
  }
  }
}
