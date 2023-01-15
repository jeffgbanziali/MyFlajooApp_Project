import React, { useState, useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import axios from 'axios';








const App = () => {
  const [uid, setUid] = useState(null);




  return (

    <View style={styles.root}>
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