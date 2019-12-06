import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Contact from '../views/Contact';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Contacter',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#615D6C'
        }
      }
    },
    Contact: {
      screen: Contact,
      navigationOptions: {
        title: 'Details',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#615D6C'
        }
      }
    }
  }
);

export default createAppContainer(StackNavigator);
