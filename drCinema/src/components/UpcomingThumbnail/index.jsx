import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import { ListItem, Avatar } from 'react-native-elements';
import { withNavigation} from 'react-navigation';

const UpcomingThumbnail = ({title, poster, dateStr}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {}}>
    <View style={styles.view}>
      <ListItem
        style={styles.list}
        containerStyle={styles.containerStyle}
        leftAvatar={<Avatar
                      style={styles.avatar}
                      source={{uri: poster}}
                      />}
        leftAvatarStyle={styles.leftAvatarStyle}
        title={title}
        titleStyle={styles.titleStyle}
        subtitle={dateStr}
        subtitleStyle={styles.subtitleStyle}
        bottomDivider
      />
    </View>
  </TouchableOpacity>
)

export default withNavigation(UpcomingThumbnail);
