import { StyleSheet } from 'react-native';
import { graniteGray, darkerGray } from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: graniteGray,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  paragraph: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'opensans_bold',
  },
  button: {
    alignItems: 'center',
    width: 150,
    height: 60,
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: darkerGray,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontFamily: 'opensans_bold',
    fontSize: 24
  },
  logo: {
    width: 300,
    height: 80,
  },
});
