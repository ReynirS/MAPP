import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  view: {

  },
  image: {
    width: winWidth,
    aspectRatio: 686/1016, // Standard movie poster size in mm
    resizeMode: 'contain',
    margin: 'auto',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  releaseYear: {
    fontSize: 12,
    margin: 10,
    marginTop: 0,
  },
  plot: {
    margin: 10,
    marginTop: 0,
  },
  duration: {
    fontSize: 14,
    fontWeight: 'bold',
    margin: 10,
    marginTop: 0,
  },
  genres: {
    fontSize: 12,
    margin: 10,
    marginTop: 0,
  },
  showtimes: {
    fontWeight: 'bold',
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  spinnerView: {
    margin: '10%'
  }
});
