import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create ({
  icon: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
  },
  bigText: {
    marginLeft: 45,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: winWidth,
    fontSize: 28,
    color: 'green',
  },
});
