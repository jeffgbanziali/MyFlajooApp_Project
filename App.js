import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import TabNavigation from './navigation/TabNavigation';
import NewPostScreen from './screens/NewPostScreen/NewPostScreen';








const App = () => {
  return (
    <View style={styles.root}>
      {/*<NewPostScreen />   */}
      <StackNavigation />
    </View>



  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2C2828',
  },
});


export default App;