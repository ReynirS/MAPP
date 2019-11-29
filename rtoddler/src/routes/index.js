import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Gallery from '../views/Gallery';
import Lists from '../views/Lists';

const StackNavigator = createStackNavigator({
  Main,
  Gallery,
  Lists
});

export default createAppContainer(StackNavigator);
