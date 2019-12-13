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
    height: 150,
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
    fontSize: 20,
  },
  subtitleStyle: {
    fontSize: 14,
  },
  rightSubtitleStyle: {
    fontSize: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 6,
    borderRadius: 3,
    backgroundColor: '#8f8c8c',
    color: 'white'
  },
  containerStyle:{
    borderRadius: 6,
    backgroundColor: '#e3e3e3',
  },
});
