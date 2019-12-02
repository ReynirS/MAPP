import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Contact from '../views/Contact';

const StackNavigator = createStackNavigator({
  Main,
  Contact
});

export default createAppContainer(StackNavigator);
