import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 6,
    borderColor: 'black'
  },
  avatar: {
    width: 100,
    height: 148,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: 'white'
  },
  list: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'black'
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  subtitleStyle: {
    fontSize: 14,
  },
  containerStyle: {
    borderRadius: 6
  }
});
