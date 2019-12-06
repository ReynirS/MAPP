import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.5,
    borderRadius: 10,
    width: winWidth - 90,
    backgroundColor: '#615D6C',
    padding: 10,
    marginBottom: 120,
  }
});
