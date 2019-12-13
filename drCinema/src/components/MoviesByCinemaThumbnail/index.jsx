import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import styles from './style';

const MoviesByCinemaThumbnail = ({ title, poster, year, genres, movieID, navigation: {navigate}}) => {
  let genreString = genres.map(m => m.Name + '\n').toString().split(',').join('');
  let subGenreString = genreString.substring(0, genreString.length -1);
  return(
    <TouchableOpacity
      activeOpacity={ 0.8 }
      onPress={ () => navigate('MovieDetail', {movieID}) }>
      <View style={ styles.view }>
        <ListItem
          style={ styles.list }
          containerStyle={ styles.containerStyle }
          leftAvatar={ <Avatar
                        style={ styles.avatar }
                        source={ { uri: poster } }
                        /> }
          leftAvatarStyle={ styles.leftAvatarStyle }
          title={ title }
          titleStyle={ styles.titleStyle }
          subtitle={ year }
          subtitleStyle={ styles.subtitleStyle }
          rightSubtitle={ subGenreString }
          rightSubtitleStyle={ styles.rightSubtitleStyle }
          bottomDivider
        />
      </View>
    </TouchableOpacity>
  );
}

export default withNavigation(MoviesByCinemaThumbnail);
