import React, { useState, useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import axios from 'axios';
import { UidContext } from './components/Context/AppContext';








const App = () => {
  const [uid, setUid] = useState(null);
  const fetchToken = () => {
    axios
      .get("http://192.168.0.34:5000/jwtid")
      .then((res) => {
        if (res.data != null) {
          setValue((res.data));
        }
      })
      .catch((err) => {
        console.log('no token');
      });
  };
  useEffect(() => {
    fetchToken();
  }, []);


  return (
    <UidContext.Provider value={{ uid, setUid }}>
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