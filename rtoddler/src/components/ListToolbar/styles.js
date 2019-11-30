import {StyleSheet} from 'react-native';
import {graniteGray, darkerGray} from '../../styles/colors';

export default StyleSheet.create({
  listToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: graniteGray,
  },
  listToolbarAction: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    backgroundColor: darkerGray
  },
  listToolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    fontFamily: 'opensans_bold'
  }
})
