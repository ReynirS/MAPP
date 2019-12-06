import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';

const ContactThumbnail = ({name, number, image, navigation: {navigate}, refresh}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() =>navigate('Contact', {name, number, image, refresh:refresh})}>
    <View>
        <ListItem
          containerStyle={{backgroundColor: 'lightgray'}}
          leftAvatar={{source: {uri: image}}}
          title={name}
          bottomDivider
        />
    </View>
  </TouchableOpacity>
)

export default withNavigation(ContactThumbnail);
