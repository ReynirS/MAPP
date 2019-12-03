import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    // textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor:'#4934EB',
    // borderBottomWidth: 1,
  },
  toolbarAction: {
    flex: 1,
    alignItems: 'center',
    // padding: '0.7%',
    // margin: '0.7%',
  },
  addIcon: {
    position: 'absolute',
    textAlignVertical: 'center',
    // bottom: 5,
    right: 5,
    height: 40,
    width: 40,
  },
  image: {
    height: 40,
    width: 40,
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
