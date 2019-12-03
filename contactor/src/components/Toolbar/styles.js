import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    textAlignVertical: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor:'#4934EB',
    borderBottomWidth: 1,
  },
  toolbarAction: {
    alignItems: 'center',
    padding: '0.7%',
    margin: '0.7%',
  },
  addIcon: {
    position: 'absolute',
    bottom: -1,
    right: 1,
    height: 50,
    width: 50,
  },
  toolbarText: {
    fontSize: 24,
    position: 'absolute',
    bottom: 14,
    left: 5,
    fontWeight: 'bold',
    color: 'white',
  }
});
