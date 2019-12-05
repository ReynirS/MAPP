import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    // textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor:'#615D6C',
    // borderBottomWidth: 1,
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
    // padding: '0.7%',
    // margin: '0.7%',
  },
  importContacts: {
    position: 'absolute',
    textAlignVertical: 'center',
    right: 45,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  importText: {
    color: '#615D6C',
    fontSize: 10,
    fontWeight: 'bold',
  },
  addIcon: {
    position: 'absolute',
    // bottom: 5,
    right: 5,
    height: 35,
    width: 35,
  },
  image: {
    height: 35,
    width: 35,
  },
  toolbarText: {
    fontSize: 24,
    position: 'absolute',
    textAlignVertical: 'center',
    // bottom: 14,
    left: 5,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  }
});
