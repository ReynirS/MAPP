import { StyleSheet } from 'react-native';
import { darkerGrey, graniteGrey} from '../../styles/colors';

export default StyleSheet.create({
  icon: {
    width: '32.3333333333%',
    margin: '0.5%',
    padding: '1.5%',
    backgroundColor: '#89868F' ,
    borderWidth: 2,
    borderColor: '#615D6C',
  },
  image: {
    width: '98%',
    aspectRatio: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  text: {
    width: '98%',
    textAlign: 'center',
    fontFamily: 'opensans_semibold',
    padding: '2%',
    color: 'white'
  },
  checkmark: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 16,
  },
});
