import React, { useState, useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import { UidContext } from './components/Context/AuthContext';
import axios from 'axios';








const App = () => {



  return (
    <UidContext.Provider >
      <View style={styles.root}>
        <StackNavigation />
      </View>
    </UidContext.Provider>




  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#2C2828',
  },
});


export default App;