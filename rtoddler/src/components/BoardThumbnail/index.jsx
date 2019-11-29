import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Image, View, Text, TouchableOpacity, Vibration } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const BoardThumbnail = ({ id, name, thumbnailPhoto, onLongPress, isSelected, navigation: {navigate} }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.icon} onLongPress={ () => onLongPress(id) } onPress={() =>navigate('Lists', {id:id})}>
    {
      isSelected
      ?
      <AntDesign name="checkcircleo" style={ styles.checkmark } />
      :
      <></>
    }
    <View style={{opacity: isSelected ? 0.5 : 1 }}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto}} />
        <Text style={styles.text} >{name}</Text>
      </View>
    </TouchableOpacity>
);

BoardThumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnailPhoto: PropTypes.string.isRequired,
  onLongPress: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

export default withNavigation(BoardThumbnail);
