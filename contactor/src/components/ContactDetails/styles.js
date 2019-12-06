import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
  contact: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    marginTop: 40,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  deleteButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    padding: 10,
  },
  deleteButtonText: {
    color: '#d11a2a',
    fontWeight: 'bold',
    fontSize: 14,
  },
  callButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'white',
  },
  lowerText: {
    marginBottom: 60,
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
