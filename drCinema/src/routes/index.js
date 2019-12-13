import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Cinemas from '../views/Cinemas';
import CinemaDetail from '../views/CinemaDetail';
import MovieDetail from '../views/MovieDetail';
import Upcoming from '../views/Upcoming';
import Trailers from '../views/Trailers';

const CinemasStack = createStackNavigator(
  {
    Cinemas: {
      screen: Cinemas,
      navigationOptions: {
        title: 'Cinemas',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#615D6C'
        }
      }
    },
    CinemaDetail: {
      screen: CinemaDetail,
      navigationOptions: {
        title: 'Cinema Detail',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#615D6C'
        }
      }
    },
    MovieDetail: {
      screen: MovieDetail,
      navigationOptions: {
        title: 'Movie Detail',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#615D6C'
        }
      }
    }
  }
);

const UpcomingStack = createStackNavigator(
  {
    Upcoming: {
      screen: Upcoming,
      navigationOptions: {
        title: 'Upcoming Movies',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#615D6C'
        }
      }
    },
    Trailers: {
      screen: Trailers,
      navigationOptions: {
        title: 'Upcoming Trailers',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#615D6C'
        }
      }
    }
  }
);

export default createAppContainer(
  createBottomTabNavigator({
    CinemasStack: {
      screen: CinemasStack,
      navigationOptions: {
        tabBarLabel: "Cinemas",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="film"
            size={ 17 }
            color={ tintColor}
          />
        )
      }
    },
    UpcomingStack: {
      screen: UpcomingStack,
      navigationOptions: {
        tabBarLabel: "Upcoming",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="calendar"
            size={ 17 }
            color={ tintColor }
          />
        )
      }
    }
  })
);
