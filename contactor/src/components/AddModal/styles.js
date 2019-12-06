import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nameInput:{
    width: winWidth/2,
    height: 30,
    backgroundColor: 'white',
    margin: 20,
  },
  numberInput:{
    width: winWidth/2,
    height: 30,
    backgroundColor: 'white',
    margin: 20,
    marginTop: 0,
  },
  button:{
    width: winWidth/2,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    color: 'lightgray',
  },
});
