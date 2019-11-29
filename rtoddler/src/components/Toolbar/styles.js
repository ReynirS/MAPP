import { StyleSheet } from 'react-native';
import {darkerBlue, graniteGray, darkerGray } from '../../styles/colors'

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: graniteGray,
  },
  toolbarAction: {
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
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    fontFamily: 'opensans_bold'
  },
});
