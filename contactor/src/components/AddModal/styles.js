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
    borderRadius: 5,
  },
  numberInput:{
    width: winWidth/2,
    height: 30,
    backgroundColor: 'white',
    margin: 20,
    marginTop: 0,
    borderRadius: 5,
  },
  button:{
    margin: 5,
    backgroundColor: 'gray',
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'lightgray',
  },
});
