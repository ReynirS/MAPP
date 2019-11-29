import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NestedDicks = () => {
  return(<View>
    <Text>Testing</Text>
  </View>
)
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Dicks</Text>
      <Button
        title='dicks'
        />
        <NestedDicks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
