import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ListItem } from 'react-native-elements';
import { withNavigation} from 'react-navigation';

const CinemaThumbnail = ({ name, website, id, navigation: {navigate} }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => navigate('CinemaDetail', {id})}>
    <View>
      <ListItem
        containerStyle={{backgroundColor: 'white'}}
        title={name}
        subtitle={website}
        bottomDivider
        />
    </View>
  </TouchableOpacity>

)

export default withNavigation(CinemaThumbnail);
