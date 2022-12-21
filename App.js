import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import TabNavigation from './navigation/TabNavigation';







const App = () => {
  return (
    <View style={styles.root}>
      {/*<StackNavigation /> */}
      <TabNavigation />
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