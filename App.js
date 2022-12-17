import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './navigation/Navigation';



const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "blue",
  },
});
export default App;