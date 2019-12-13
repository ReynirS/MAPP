import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  description: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 5,
    padding: 4,
    backgroundColor: '#e3e3e3',
  },
  address: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
  },
  phoneNumber: {
    margin: 10,
    marginTop: 0,
    fontSize: 14,
  },
  website: {
    margin: 10,
    marginTop: 0,
    fontSize: 20,
    color: 'blue',
  },
  spinnerView: {
    margin: '10%'
  }
});
