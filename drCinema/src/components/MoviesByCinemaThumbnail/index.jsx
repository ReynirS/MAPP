import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import styles from './style';
import { withNavigation } from 'react-navigation';

const MoviesByCinemaThumbnail = ({ title, poster, year, genres}) => {
  let genreString = genres.map(m => m.Name + '\n').toString().split(',').join('');
  return(
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
          subtitle={year}
          subtitleStyle={styles.subtitleStyle}
          rightSubtitle={genreString}
          rightSubtitleStyle={styles.rightSubtitleStyle}
          bottomDivider
        />
      </View>
    </TouchableOpacity>
  );
}

export default withNavigation(MoviesByCinemaThumbnail);
