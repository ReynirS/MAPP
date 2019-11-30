import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  nameText: {
    fontFamily: 'opensans_semibold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  description: {
    fontFamily: 'opensans_regular',
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  icon: {
    width: '95%',
    margin: '1.5%',
    padding: '1%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 2,
    backgroundColor:  '#89868F'
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  }
})
