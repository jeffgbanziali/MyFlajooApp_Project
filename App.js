import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import AuthProvider from './components/Context/AuthContext';








const App = () => {
  return (
    <AuthProvider>
      <View style={styles.root}>
        <StackNavigation />
      </View>
    </AuthProvider>




  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2C2828',
  },
});


export default App;